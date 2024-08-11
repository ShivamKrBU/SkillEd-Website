import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.jsx";
import Score from "./Pages/Dashboard/Admin_menu/Score.jsx";
import Students from "./Pages/Dashboard/Admin_menu/Students.jsx";
import Task from "./Pages/Dashboard/Admin_menu/Task.jsx";
import Help from "./Pages/Dashboard/Admin_menu/Help.jsx";
import Dashboard from "./Pages/Dashboard/Admin_menu/Dashboard.jsx";
import Settings from "./Pages/Dashboard/Admin_menu/Settings.jsx";
import Profile from "./Pages/Dashboard/Admin_menu/Profile.jsx";
import Spinner from "./Components/Spinner/Spinner.jsx";
import MyCourse from "./Pages/Dashboard/MyCoourse/MyCourse.jsx";

const Layout = lazy(() => import("./Pages/Layout/Layout.jsx"));
const LandingPage = lazy(() => import("./Pages/Home/LandingPage.jsx"));
const SignIn = lazy(() => import("./Pages/SigninPage/SignIn.jsx"));
const SignUp = lazy(() => import("./Pages/SignupPage/SignUP.jsx"));
const CoursePage = lazy(() => import("./Components/CourseDetails/CourseDetails.jsx"));
const TermsAndConditon = lazy(() => import("./Pages/TermsAndCondition/TermsAndConditon.jsx"));
const DashboardLayout = lazy(() => import("./Pages/Dashboard/DashboardLayout/Dashboard.jsx"));
const GeneralSetting = lazy(() => import("./Pages/Dashboard/GeneralSetting/GeneralSetting.jsx"));
const PrivacySetting = lazy(() => import("./Pages/Dashboard/PrivacySetting/PrivacySetting.jsx"));
const BillingSetting = lazy(() => import("./Pages/Dashboard/BillingSetting/BillingSetting.jsx"));
const NotificationSetting = lazy(() => import("./Pages/Dashboard/NotificationSetting/NotificationSetting.jsx"));
const Admin_404 = lazy(() => import("./Pages/Dashboard/Admin_menu/Admin_404.jsx"))
const AddQuestions = lazy(() => import('./Pages/Dashboard/AddQuestions/AddQuestions.jsx'))
const AddCourseDetailsPage = lazy(() => import("./Pages/Dashboard/AddCourses/AddCourseDetails.jsx"));
const Quiz = lazy(() => import('./Pages/Dashboard/Quiz/Quiz.jsx'))
const QuizData = lazy(() => import('./Pages/Dashboard/QuizData/QuizData.jsx'))
const QuizUserQue = lazy(() => import('./Pages/Dashboard/QuizData/QuizUserQue.jsx'))





function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Suspense fallback={<Spinner />}><Layout /></Suspense>}>
        <Route index element={<LandingPage />} />
        <Route path="termsAndCondition" element={<Suspense fallback={<Spinner />}><TermsAndConditon /></Suspense>} />
        <Route path="courseDetail" element={<CoursePage />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/quizs" element={<Quiz />} />
        <Route path="/dashboard" element={<Suspense fallback={<Spinner />}><DashboardLayout /></Suspense>}>

          <Route index element={<Dashboard />} />
          <Route path="addcoursedetails" element={<AddCourseDetailsPage />} />
          <Route path="score" element={<Score />} />
          <Route path="mycourse" element={<MyCourse />} />
          <Route path="addmcq" element={<AddQuestions />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="quizdata" element={<QuizData />} />
          <Route path="quizuserque" element={<QuizUserQue />} />
          <Route path="students" element={<Students />} />
          <Route path="profile" element={<Profile />} />
          <Route path="task" element={<Task />} />
          <Route path="settings" element={<Suspense fallback={<Spinner />}><Settings /></Suspense>}>
            <Route index element={<GeneralSetting />} />
            <Route path="billing" element={<BillingSetting />} />
            <Route path="privacy" element={<PrivacySetting />} />
            <Route path="notification" element={<NotificationSetting />} />
            <Route path="help" element={<Help />} />
          </Route>
        </Route>
      </Route>
      <Route path="/signIn" element={<Suspense fallback={<Spinner />}><SignIn /></Suspense>} />
      <Route path="/signUp" element={<Suspense fallback={<Spinner />}><SignUp /></Suspense>} />
      <Route path="*" element={<Suspense fallback={<Spinner />}><Admin_404 /></Suspense>} />
    </Routes>
  );
}

export default AppRoutes;
