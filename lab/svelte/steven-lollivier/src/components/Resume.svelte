<script>
	import { ResumeItem } from '.';
</script>

<section id="resume" class="section">
	<div class="container section-wrapper">
		<div class="section-content">
			<div class="row">
				<div class="col-md-8 col-md-offset-2 text-center">
					<h2 class="section-title">My resume</h2>

					<p class="section-subtitle">
						If you call failures experiments, you can put them in your resume and claim them as
						achievements.
					</p>

					<span class="divider center" />
				</div>
			</div>
			<!-- WORK EXPERIENCE START -->
			<div class="row work-experience">
				<div class="col-md-10 col-md-offset-1">
					<h3>
						Work experience
						<br /> 2009 - Now
					</h3>

					<div class="panel-group resume" id="work">
						<ResumeItem start={[2023, 0]} title="Tech Lead - PocPharma" />

						<ResumeItem start={[2019, 8]} end={[2023, 0]} title="Software engineer - HelloWork" />

						<ResumeItem start={[2013, 2]} end={[2019, 8]} title="IT Developer - 6TM" />

						<ResumeItem
							start={[2010, 11]}
							end={[2012, 11]}
							title="Analyst Programmer (Web) - CYIM"
						/>

						<ResumeItem year="2009" title="Analyst Programmer (internal) - DRTEFP" />

						<ResumeItem year="2009" title=".NET developer (Internship) - DGA (Ex CELAR)" />
					</div>
				</div>
			</div>
			<!-- //WORK EXPERIENCE END -->
			<!-- EDUCATION START -->
			<div class="row education">
				<div class="col-md-10 col-md-offset-1">
					<h3>
						My education
						<br /> 2006 - 2012
					</h3>

					<div class="panel-group resume" id="education">
						<ResumeItem
							year="2010 - 2012"
							title="IT Developer - ENI"
							description="Bachelor's degree"
						/>

						<ResumeItem year="2007 - 2009" title="DUT GEII - IUT GEII RENNES 1" />

						<ResumeItem year="2006 - 2007" title="Bac STI Electronic - Marcel Callo High School" />
					</div>
				</div>
			</div>
			<!-- //EDUCATION END -->
		</div>
	</div>
</section>
