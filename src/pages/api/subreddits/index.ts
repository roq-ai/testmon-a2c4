import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { subredditValidationSchema } from 'validationSchema/subreddits';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getSubreddits();
    case 'POST':
      return createSubreddit();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getSubreddits() {
    const data = await prisma.subreddit
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'subreddit'));
    return res.status(200).json(data);
  }

  async function createSubreddit() {
    await subredditValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.post?.length > 0) {
      const create_post = body.post;
      body.post = {
        create: create_post,
      };
    } else {
      delete body.post;
    }
    const data = await prisma.subreddit.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
