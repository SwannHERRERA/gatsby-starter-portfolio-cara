import { jsx } from "theme-ui"
import Content from "../elements/content"
import Divider from "../elements/divider"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"

const Timeline = ({ offset, factor = 2 }: { offset: number; factor?: number }) => (
	<div>

	<Divider speed={0.1} offset={offset - 1.5} factor={factor + 1}>
      <UpDown>
        <SVG icon="box" width={6} color="icon_brightest" left="85%" top="75%" />
        <SVG icon="upDown" width={8} color="icon_teal" left="70%" top="20%" />
        <SVG icon="triangle" width={8} stroke color="icon_orange" left="25%" top="5%" />
        <SVG icon="circle" hiddenMobile width={24} color="icon_brightest" left="17%" top="60%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} color="icon_green" left="20%" top="90%" />
        <SVG icon="triangle" width={8} stroke color="icon_brightest" left="90%" top="30%" />
        <SVG icon="circle" width={16} color="icon_yellow" left="70%" top="90%" />
        <SVG icon="triangle" hiddenMobile width={16} stroke color="icon_teal" left="18%" top="75%" />
        <SVG icon="circle" width={6} color="icon_brightest" left="75%" top="10%" />
        <SVG icon="upDown" hiddenMobile width={8} color="icon_green" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
      <SVG icon="circle" width={12} color="icon_pink" left="80%" top="60%" />
      <SVG icon="box" width={6} color="icon_orange" left="10%" top="10%" />
      <SVG icon="box" width={12} color="icon_yellow" left="29%" top="26%" />
      <SVG icon="hexa" width={16} stroke color="icon_red" left="75%" top="30%" />
      <SVG icon="hexa" width={8} stroke color="icon_yellow" left="80%" top="70%" />
			<SVG icon="circle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
      <SVG icon="circle" width={10} color="icon_pink" left="80%" top="60%" />
      <SVG icon="box" width={6} color="icon_orange" left="15%" top="17%" />
      <SVG icon="box" width={12} color="icon_yellow" left="29%" top="26%" />
      <SVG icon="hexa" width={16} stroke color="icon_red" left="78%" top="37%" />
      <SVG icon="hexa" width={8} stroke color="icon_yellow" left="64%" top="74%" />
    </Divider>
		<Content speed={0.4} offset={offset + 0.2} factor={factor}>
		<section id="cd-timeline" className="cd-container">
			<div className="cd-timeline-block">
				<div className="cd-timeline-img cd-picture">
				</div>

				<div className="cd-timeline-content">
					<h2>Les pythoneries</h2>
					{/* <div className="timeline-content-info">
						<span className="timeline-content-info-title">
							<i className="fa fa-certificate" aria-hidden="true"></i>
							Python
						</span>
						<span className="timeline-content-info-date">
							<i className="fa fa-calendar-o" aria-hidden="true"></i>
							2011
						</span>
					</div> */}
					{/* <p>Working alongside the designer team implementing the designs, also developing custom solutions to address team necessities.</p> */}
					<ul className="content-skills">
					<li>Python</li>
					</ul>
					<span className="cd-date">2011</span>

				</div>
			</div>

			<div className="cd-timeline-block">
				<div className="cd-timeline-img cd-movie">
				</div>

				<div className="cd-timeline-content">
					<h2>Java</h2>
					<ul className="content-skills">
					<li>Java</li>
					</ul>
					<span className="cd-date">2014</span>
				</div>
			</div>
			<div className="cd-timeline-block">
				<div className="cd-timeline-img cd-picture">
				</div>

				<div className="cd-timeline-content">
					<h2>Formation Web Openclassroom</h2>
					<ul className="content-skills">
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					</ul>
					<span className="cd-date">2016</span>
				</div>
			</div>

			<div className="cd-timeline-block">
				<div className="cd-timeline-img cd-location">
				</div>

				<div className="cd-timeline-content">
					<h2>Formation PHP Openclassroom</h2>
					<ul className="content-skills">
					<li>PHP</li>
					<li>MySQL</li>
					</ul>
					<span className="cd-date">2016 - 2017</span>
				</div>
			</div>

			<div className="cd-timeline-block">
				<div className="cd-timeline-img cd-location">
				</div> 

				<div className="cd-timeline-content">
					<h2>Ruby On Rails</h2>
					<ul className="content-skills">
					<li>Ruby</li>
					<li>Ruby on Rails</li>
					</ul>
					<span className="cd-date">2018</span>
				</div>
			</div>

			<div className="cd-timeline-block">
				<div className="cd-timeline-img cd-movie">
				</div>

				<div className="cd-timeline-content">
					<h2>Debut de mes études a l'ESGI</h2>
					<span className="cd-date">2018 - 2023</span>
				</div>
				</div>

				<div className="cd-timeline-block">
				<div className="cd-timeline-img cd-movie">
				</div> 

				<div className="cd-timeline-content">
					<h2>Graines d'octets</h2>
					<ul className="content-skills">
					<li>PHP</li>
					<li>CodeIgniter</li>
					<li>Wordpress</li>
					<li>Javascript</li>
					<li>Jquery</li>
					<li>intégration</li>
					</ul>
					<span className="cd-date">2018 - 2021</span>
				</div>
			</div>
		</section>
	</Content>
	</div>
)

export default Timeline
