import * as yup from 'yup';

export const upvoteValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
  post_id: yup.string().nullable(),
  comment_id: yup.string().nullable(),
});
