import AppRoutes from '../../routes/AppRoutes';
import LeftNavigation from '../leftNavigation/LeftNavigation';
import { useBreakpoints } from '../../hooks';
import { useStyles } from './main.styles';

const Main = () => {
    const {isMobile} = useBreakpoints();
    const styles = useStyles()
    return (
      <main css={styles.main}>
        {!isMobile && <LeftNavigation />}
        <AppRoutes />
      </main>
    );

}
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );

export default Main;