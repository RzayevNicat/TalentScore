import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { AiOutlineCheck } from 'react-icons/ai';
import { useData } from '../../context/dataContext';
import './style.css';
import { toast } from 'react-toastify';
const ExperienceValid = Yup.object().shape({
	company: Yup.string().required('Please provide New Password'),
	duty: Yup.string().required('Please provide New Password'),
	workStart: Yup.string().required('Please provide New Password'),
	options: Yup.string().required('Please provide New Password')
});
function Experienced() {
	const { datas, setData } = useData();
	return (
		<div>
			<Formik
				initialValues={{
					id: 0,
					company: '',
					duty: '',
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

							<div className="start">
								<label>İşə başlama tarixi: </label>
								<Field type="month" name="workStart" />
							</div>
							<div className="end">
								<label>İşdən ayrılma tarixi: </label>
								<Field type="month" name="workEnd" />
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

export default Experienced;
