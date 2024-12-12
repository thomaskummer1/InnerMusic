import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
export default function ProtectedRoute({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { uid } = useParams();
  if (currentUser && uid && currentUser._id === uid) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}
