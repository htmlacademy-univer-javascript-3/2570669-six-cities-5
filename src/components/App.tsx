import {MainScreen} from './pages/MainScreen';

type AppScreenProps = {
  placesCount: number;
}
function App({placesCount}: AppScreenProps){
  return (
    <MainScreen placesCount={placesCount}/>
  );
}
export default App;
