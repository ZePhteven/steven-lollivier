<script>
	import { BarChart } from '.';
</script>

<section id="strengths" class="section">
	<div class="container section-wrapper">
		<div class="section-content">
			<div class="row">
				<div class="col-md-8 col-md-offset-2 text-center">
					<h2 class="section-title">Strengths</h2>

					<p class="section-subtitle">
						Failure will never overtake me if my determination to succeed is strong enough.
					</p>

					<span class="divider center" />
				</div>
			</div>

			<!-- BAR CHART START -->
			<div class="row">
				<!-- <div class="col-sm-6 col-md-6"> -->
				<div class="bar-chart">
					<BarChart title="Creativity" percent={55} />

					<BarChart title="Leadership" percent={75} />

					<BarChart title="Communication" percent={80} />
				</div>
				<!-- </div> -->
			</div>
			<!-- //BAR CHART END -->
		</div>
	</div>
</section>
