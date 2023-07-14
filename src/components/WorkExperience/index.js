import React from 'react';
import * as Yup from 'yup';
import { AiOutlineCheck } from 'react-icons/ai';
import './style.css';
import { Formik, Field, Form } from 'formik';
import { BiSolidDownArrow } from 'react-icons/bi';
import { useData } from '../../context/dataContext';
import { toast } from 'react-toastify';
const ExperienceValid = Yup.object().shape({
	company: Yup.string().required('Please provide New Password'),
	duty: Yup.string().required('Please provide New Password'),
	labour: Yup.string().required('Please provide New Password'),
	professionalism: Yup.string().required('Please provide New Password'),
	workStart: Yup.string().required('Please provide New Password'),
	options: Yup.string().required('Please provide New Password')
});
function WorkExperience() {
	const { datas, setData } = useData();
	const { currentPage, setCurrentPage } = useData();
	return (
		<div>
			<Formik
				initialValues={{
					id: 0,
					company: '',
					duty: '',
					labour: '',
					professionalism: '',
					workStart: '',
					workEnd: '',
					options: false
				}}
				validationSchema={ExperienceValid}
				onSubmit={(values, { resetForm }) => {
					let copy = [
						...datas,
						{
							company: values.company,
							duty: values.duty,
							labour: values.labour,
							professionalism: values.professionalism,
							workStart: values.workStart,
							workEnd: values.workEnd,
							options: values.options,
							id: datas.length + 1
						}
					];
					setData(copy);
					toast.success('tecrubeniz elave olundu', {
						position: 'top-center',
						autoClose: 3000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'light'
					});
					setCurrentPage(currentPage + 1);
					resetForm({ values: '' });
				}}
			>
				{({ values, errors, touched }) => (
					<Form className="form-worker">
						<div>
							<div className="company">
								<label>Çalışdığınız müəssisənin adını qeyd edin.*</label>
								<Field name="company" type="text" className="textInp" />
							</div>
							<div className="duty">
								<label>Vəzifənizi qeyd edin.*</label>
								<Field name="duty" type="text" className="textInp" />
							</div>
							<div className="labourProfessionalism">
								<div className="labour">
									<label>Əmək fəaliyyət forması:</label>
									<div className="custom-select">
										<Field name="labour" as="select">
											<option value="Zambia">Zambia</option>
											<option value="Azerbaijan">Azerbaijan</option>
										</Field>
										<span className="custom-arrow">
											<BiSolidDownArrow className="icon" />
										</span>
									</div>
								</div>
								<div className="profes">
									<label>Peşəkarlıq dərəcəsi:</label>
									<div className="custom-select">
										<Field name="professionalism" as="select">
											<option value="Zambia">Zambia</option>
											<option value="Azerbaijan">Azerbaijan</option>
										</Field>
										<span className="custom-arrow">
											<BiSolidDownArrow className="icon" />
										</span>
									</div>
								</div>
							</div>
							<div className="startEnd">
								<div>
									<label>İşə başlama tarixi: </label>
									<Field type="month" name="workStart" />
								</div>
								<div className="workEnd">
									<label>İşdən ayrılma tarixi: </label>
									<Field type="month" name="workEnd" />
								</div>
							</div>
							<div className="options">
								<Field type="checkbox" name="options" />
								<label>Hal hazırda çalışıram.</label>
							</div>
							<div className="save">
								<button className="save-data" type="submit">
									Yadda saxla <AiOutlineCheck className="icon" />
								</button>
							</div>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default WorkExperience;
