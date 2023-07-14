import React from 'react';
import human from '../../images/Frame.png';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import './style.css';
import FormWorker from '../Form';
import { useData } from '../../context/dataContext';
import { toast } from 'react-toastify';
import { Zoom } from 'react-awesome-reveal';
function TehsilSections() {
	const { currentPage, setCurrentPage } = useData();
	const { datas } = useData();
	const nextPage = () => {
		if (datas.length === 0) {
			toast.error('siz tecrube elave etmemisiz', {
				position: 'top-center',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light'
			});
		} else {
			setCurrentPage(currentPage + 1);
		}
	};
	const previosPage = () => {
		if (datas.length !== 0 && currentPage === 2) {
			toast.error('tecrubeniz var', {
				position: 'top-center',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light'
			});
		} else {
			setCurrentPage(currentPage - 1);
		}
	};
	return (
		<div className="tehsil">
			<div className="humanImg">
				<img src={human} alt="human" />
			</div>
			<div className="FormSections">
				<div className="sections">
					<ul>
						<li>Təhsil</li>
						<li className="mrg">Dil bilikləri</li>
						<li className="mrg">Bacarıqlar</li>
						<li className="mrg">İdman</li>
						<li className="blueSection mrg">
							<span>4.</span> İş təcrübəsi
						</li>
						<li className="mrg">Program</li>
					</ul>
				</div>
				<div className="form">
					<FormWorker />
					{currentPage === 1 ? null : (
						<Zoom>
							<div className="btn">
								<button
									className="back-btn"
									onClick={previosPage}
									disabled={currentPage === 1 ? true : false}
								>
									<BsArrowLeft className="icon" />Geri
								</button>
								<button
									className="next-btn"
									onClick={nextPage}
									disabled={currentPage === 2 ? true : false}
								>
									Növbəti <BsArrowRight className="icon" />
								</button>
							</div>
						</Zoom>
					)}
				</div>
			</div>
		</div>
	);
}

export default TehsilSections;
