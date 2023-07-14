import React from 'react';
import './styles.css';
import { GiCancel } from 'react-icons/gi';
import { useData } from '../../context/dataContext';
import NotFound from '../NotFound';
import { AiOutlinePlus } from 'react-icons/ai';
import { Zoom } from 'react-awesome-reveal';
function Experiences() {
	const { datas, setData } = useData();
	const { currentPage, setCurrentPage } = useData();
	const handlePage = () => {
		if (datas.length === 0) {
			setCurrentPage(currentPage - 1);
		} else {
			setCurrentPage(currentPage + 1);
		}
	};
	const handleDelete = (id) => {
		const copy = datas.filter((x) => x.id !== id);
		setData(copy);
	};
	return (
		<div className="experienceTable">
			{datas.length === 0 ? (
				<NotFound />
			) : (
				datas.map((elem, id) => (
					<Zoom duration={1000}>
						<div className="table" key={id}>
							<p className="td1">
								{elem.id}.{elem.company}
							</p>
							<p className="td2">
								{elem.workStart} - {elem.options === true ? '...' : elem.workEnd}
							</p>
							<p className="td3">
								<GiCancel className="icon" onClick={() => handleDelete(elem.id)} />
							</p>
						</div>
					</Zoom>
				))
			)}
			<div className="save">
				<button className="save-data" onClick={handlePage}>
					Yeni iş yeri Əlavə et!<AiOutlinePlus className="icon" />
				</button>
			</div>
		</div>
	);
}

export default Experiences;
