import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/auth/Login";
import TeacherDashboard from "./Pages/teacher/TeacherDashboard";
import PrincipalDashboard from "./Pages/principal/PrincipalDashboard";
import ProtectedRoute from "./components/comman/ProtectedRoute";
import TeacherLayout from "./layouts/TeacherLayout";
import PrincipalLayout from "./layouts/PrincipalLayout";
import PendingApproval from "./Pages/principal/PendingApproval";
import AllContent from "./Pages/principal/AllContent";
import UploadContent from "./Pages/teacher/UploadContent";
import MyContent from "./Pages/teacher/MyContent";
import { useAuth } from "./context/AuthContext";
import { AuthProvider } from "./context/AuthContext";



function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/teacher/dashboard"
            element={
              <ProtectedRoute role="TEACHER">
                <TeacherLayout>
                  {/* <Dashboard /> */}
                  <TeacherDashboard />
                </TeacherLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/teacher/upload"
            element={
              <ProtectedRoute role="TEACHER">
                <TeacherLayout>
                  <UploadContent />
                </TeacherLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/teacher/my-content"
            element={
              <ProtectedRoute role="TEACHER">
                <TeacherLayout>
                  <MyContent />
                </TeacherLayout>
              </ProtectedRoute>
            }
          />

          {/* <Route
          path="/principal/dashboard"
          element={
            <ProtectedRoute role="principal">
              <PrincipalDashboard />
            </ProtectedRoute>
          }
        />
      </Routes> */}


          <Route
            path="/principal/pending"
            element={
              <ProtectedRoute role="PRINCIPAL">
                <PrincipalLayout>
                  <PendingApproval />
                </PrincipalLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/principal/all-content"
            element={
              <ProtectedRoute role="PRINCIPAL">
                <PrincipalLayout>
                  <AllContent />
                </PrincipalLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;