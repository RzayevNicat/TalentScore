import React from 'react';
import './style.css';
import { useData } from '../../context/dataContext';
import Experiences from '../Experiences';
import CheckBox from '../CheckBox';
import Experienced from '../Experienced';
import { Zoom } from 'react-awesome-reveal';
function FormWorker() {
	const { currentPage } = useData();
	const PageDisplay = () => {
		if (currentPage === 1) {
			return <CheckBox />;
		} else if (currentPage === 2) {
			return <Experiences />;
		} else if (currentPage === 3) {
			return (
				<Zoom duration={1000}>
					<Experienced />
				</Zoom>
			);
		}
	};
	return (
		<div className="form-1">
			<h1>İş təcrübəsi</h1>
			<div
				className="nav"
				style={{
					background:
						currentPage === 2
							? 'linear-gradient(90deg, rgba(3,132,119,1) 100%, rgba(244,244,244,1) 100%)'
							: 'linear-gradient(90deg, rgba(3, 132, 119, 1) 50%, rgba(244, 244, 244, 1) 50%)'
				}}
			/>
			{PageDisplay()}
		</div>
	);
}

export default FormWorker;
