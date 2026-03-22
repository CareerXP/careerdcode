import { getStudentReviews } from "@/services/contentfulService";
import StudentReviewsClient from "./StudentReviewsClient";

export default async function StudentReviews() {
  const reviews = await getStudentReviews();

  return <StudentReviewsClient reviews={reviews} />;
}
