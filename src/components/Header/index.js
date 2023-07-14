import React from 'react';
import './style.css';
import lane3 from '../../images/Line 3.png';
import lane4 from '../../images/Line 4.png';
import talent from '../../images/Frame 61.png';
import backgrounImage from '../../images/Rectangle 24.png';
export default function Header() {
	return (
		<header>
			<img src={backgrounImage} alt="backgrounImage" className="background" />
			<div className="header">
				<div className="lanes">
					<img src={lane3} alt="lane3" className="lane3" />
					<img src={lane4} alt="lane4" className="lane4" />
				</div>
				<div className="talentScore">
					<img src={talent} alt="talent" />
					<p>
						Bu formu Doldurduqdan sonra öz <br /> yaşıdlarınız arasında ən yaxşı hansı <br /> faizlikdə
						olduğunuzu müəyyən edə <br /> biləcəksiniz
					</p>
				</div>
			</div>
		</header>
	);
}
