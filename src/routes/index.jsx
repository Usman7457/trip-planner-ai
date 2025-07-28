import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "../layout";
import {
  CommunityTrips,
  ContactUs,
  Disclaimer,
  HomePage,
  PageNotFound,
  PrivacyPolicy,
  TermsAndConditions,
  CommunityTripDetail,
  Login,
  SignUp,
  ForgotPassword,
  Dashboard,
  SettingsPage,
  UserOperations,
  CommunityTripOperations,
  DestinationOperations,
  AiTripOperations,
  RestrictedUser,
} from "../pages";
import RecoverPassword from "../pages/recover-password";

const ProtectedRoute = ({ element, roles }) => {
  const userRole = localStorage.getItem("role"); // Get user role from local storage
  return roles.includes(userRole) ? element : <Navigate to="/access-denied" />;
};

const RouterForm = () => {
  const userRole = localStorage.getItem("role"); // Get user role from local storage

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/community-trips" element={<CommunityTrips />} />
          
          {/* Redirect based on user role for dashboard */}
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} roles={['ftp-admin']} />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
        
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/access-denied" element={<RestrictedUser />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/community-trip-detail/:slug" element={<CommunityTripDetail />} />
        
        {/* Login Route */}
        <Route path="/login" element={userRole === "visitor" ? <Navigate to="/access-denied" /> : <Login />} />
        
        {/* Registration and Password Recovery */}
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/recover-password" element={<RecoverPassword />} />

        {/* Protected routes for user operations */}
        <Route path="/user-operations" element={<ProtectedRoute element={<UserOperations />} roles={['admin', 'ftp-admin']} />} />
        <Route path="/community-trip-operations" element={<ProtectedRoute element={<CommunityTripOperations />} roles={['admin', 'ftp-admin']} />} />
        <Route path="/ai-trip-operations" element={<ProtectedRoute element={<AiTripOperations />} roles={['admin', 'ftp-admin']} />} />
        <Route path="/destination-operations" element={<ProtectedRoute element={<DestinationOperations />} roles={['admin', 'ftp-admin']} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterForm;
