<script>
	import sticky from '$lib/sticky';

	let isStuck = false;

	function handleStuck(e) {
		isStuck = e.detail.isStuck;
	}
</script>

<div>
	<nav
		id="navigation"
		class="navbar navbar-fixed-top center-menu sticky"
		class:isStuck
		data-position="top"
		use:sticky={{ stickToTop: true }}
		on:stuck={handleStuck}
	>
		<div class="container navbar-container">
			<div class="navbar-header page-scroll">
				<button
					type="button"
					class="navbar-toggle"
					data-toggle="collapse"
					data-target=".main-collapse"
				>
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar" />
					<span class="icon-bar" />
					<span class="icon-bar" />
				</button>

				<a class="navbar-brand visible-xs visible-sm" href="#page-top">Steven</a>
			</div>

			<div class="navbar-collapse collapse main-collapse">
				<ul class="nav navbar-nav">
					<li class="page-scroll">
						<a href="#home">Home</a>
					</li>

					<li class="page-scroll">
						<a href="#profile">Profile</a>
					</li>

					<li class="page-scroll">
						<a href="#resume">Resume</a>
					</li>

					<li class="page-scroll">
						<a href="#skills">Skills</a>
					</li>

					<li class="page-scroll">
						<a href="#lab">Lab</a>
					</li>

					<li class="page-scroll">
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</div>

<style>
	.sticky {
		transition: all 0.3s;
	}

	.sticky[data-position='top'] {
		top: 0rem;
	}

	.sticky.isStuck {
		position: fixed !important;
	}
</style>
