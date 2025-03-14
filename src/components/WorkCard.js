import React from "react";
import { FiPaperclip } from "react-icons/fi"; // Universal Icon for GitHub & Drive
import { Link } from "react-router-dom";

const WorkCard = ({ w, tabId }) => {
	return (
		<div className='works-card'>
			<div className='works-container'>
				<div className='top-work'>
					<div className='right'>
						{/* GitHub Link (For DSML, GD, SDE) */}
						{w.gitlink && (
							<Link className='work-link' to={w.gitlink} target='_blank' rel='noopener noreferrer'>
								<FiPaperclip />
							</Link>
						)}


					</div>
				</div>

				<div className='mid-work'>
					<p className='work-title'>{w.title}</p>
					<p className='work-desc'>{w.desc}</p>
				</div>

				<div className='bottom-work'>
					{w.tech.map((e, index) => (
						<small key={index}>{e}</small>
					))}
				</div>
			</div>
		</div>
	);
};

export default WorkCard;
