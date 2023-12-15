<script>
	import { CircleChart } from '.';
</script>

<section id="skills" class="section">
	<div class="container section-wrapper">
		<div class="section-content">
			<div class="row">
				<div class="col-md-8 col-md-offset-2 text-center">
					<h2 class="section-title">Skills & Expertise</h2>

					<p class="section-subtitle">
						A winner is someone who recognizes his born-given talents, works his tail off to develop
						them into skills, and uses these skills to accomplish his goals.
					</p>

					<span class="divider center" />
				</div>
			</div>

			<!-- CIRCLE CHART START -->
			<div class="circle-chart">
				<div class="row">
					<div class="col-sm-4 col-md-3">
						<CircleChart title="C#" percent={85} />
					</div>

					<div class="col-sm-4 col-md-3">
						<CircleChart title="React" percent={65} />
					</div>

					<div class="col-sm-4 col-md-3">
						<CircleChart title="SQL" percent={75} />
					</div>

					<div class="col-sm-4 col-md-3">
						<CircleChart title="JS / Typescript" percent={85} />
					</div>

					<div class="col-sm-4 col-md-3">
						<CircleChart title="NestJs" percent={60} />
					</div>

					<div class="col-sm-4 col-md-3">
						<CircleChart title="Angular" percent={70} />
					</div>

					<div class="col-sm-4 col-md-3">
						<CircleChart title="GIT" percent={85} />
					</div>

					<div class="col-sm-4 col-md-3">
						<CircleChart title="Unit Tests" percent={80} />
					</div>
				</div>
			</div>
			<!-- //CIRCLE CHART END -->
		</div>
	</div>
</section>
