import React from 'react';
import { useState } from 'react';
import WorkExperience from '../WorkExperience/index';
import { Zoom } from 'react-awesome-reveal';
import NotFound from '../NotFound';

function CheckBox() {
	const [ experience, setExperience ] = useState(false);

	return (
		<div>
			<div className="checkbox">
				<h2>İş təcrübəniz var?</h2>
				<div className="check-flex">
					<div>
						<label htmlFor="beli">Bəli</label>
						<input
							name="choose"
							type="radio"
							id="beli"
							value="beli"
							onClick={() => {
								setExperience(true);
							}}
						/>
					</div>
					<div className="noCheck">
						<label htmlFor="xeyr">Xeyr</label>
						<input
							name="choose"
							type="radio"
							id="xeyr"
							value="xeyr"
							onClick={() => {
								setExperience(false);
							}}
						/>
					</div>
				</div>
			</div>
			{experience ? (
				<Zoom duration={1000}>
					<WorkExperience />
				</Zoom>
			) : (
				<NotFound />
			)}
		</div>
	);
}

export default CheckBox;
