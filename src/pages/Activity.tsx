import Notifications from "../components/notifications/Notifications";
import MainLayout from "../layouts/MainLayout";

const Activity: React.FC = () => {
  return (
    <MainLayout nameSection="Actividad">
      <Notifications />
    </MainLayout>
  );
};

export default Activity;
