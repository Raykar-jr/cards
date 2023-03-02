import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import NewPassword from 'presentation/component/NewPassword/NewPassword'
import Test from 'presentation/component/Test/Test'
import Registration from 'presentation/component/Registration/Registration'
import Login from 'presentation/component/Login/Login'
import Recovery from 'presentation/component/Recovery/Recovery'
import Profile from 'presentation/component/Profile/Profile'
import Error from 'presentation/component/Error/Error'

function App() {
	return (
		<div>
			<NavLink to={'/'}>Login </NavLink>
			<NavLink to={'/profile'}>Profile </NavLink>
			<NavLink to={'/password'}>New Password </NavLink>
			<NavLink to={'/registration'}>Registration </NavLink>
			<NavLink to={'/recovery'}>Recovery </NavLink>
			<NavLink to={'/test'}>Test </NavLink>

			<Routes>
				<Route path={'/*'} element={<Error />} />
				<Route path={'/'} element={<Login />} />
				<Route path={'/profile'} element={<Profile />} />
				<Route path={'/password'} element={<NewPassword />} />
				<Route path={'/registration'} element={<Registration />} />
				<Route path={'/recovery'} element={<Recovery />} />
				<Route path={'/test'} element={<Test />} />
			</Routes>
		</div>
	)
}

export default App
