import Main from '../../Components/Main/Main';
import Courses from '../../Components/Courses/Courses';
import Categories from '../../Components/Categories/Categories';
import Student_id from '../../Components/Student_id/Student_id';
import Staff_training from '../../Components/Staff_training/Staff_training'
import Giftcard from '../../Components/Giftcards/Giftcards'
import BundlePage from '../../Components/BundlesPage/BundlesPage'

export default function LandingPage() {
  return (
    <>
      <Main/>
      <Courses/>
      <Categories/>
      <Student_id/>
      <Staff_training/>
      <Giftcard/>
      <BundlePage/>
    </>
  );
}
