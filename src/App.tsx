import { useSelector } from 'react-redux';
import Field from './components/Field/Field';
import { RootState, useAppDispatch } from './store';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import GamePage from './pages/Game/GamePage';
import LeaderboardPage from './pages/Leaderboard/LeaderboardPage';
import { useEffect } from 'react';
import { startNewGameThunk } from './thunks/game';

const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(startNewGameThunk());
    }, []);

    return (
        <>
            <BrowserRouter>
                <div className='gameCont'>
                    <Routes>
                        <Route path='/game' element={<GamePage />} />
                        <Route path='/leaders' element={<LeaderboardPage />} />
                        <Route path='*' element={<Navigate to='/game' />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
};

export default App;
