<script>
	import Age from './Age.svelte';
</script>

<section id="profile" class="section">
	<div class="container section-wrapper">
		<div class="section-content">
			<div class="row">
				<div class="col-md-7 match-height">
					<!-- PROFILE TEXT START -->
					<div class="profile-text padding-right-yes">
						<div class="row">
							<div class="col-md-12">
								<h2 class="section-title">Hello, my name is Steven.</h2>

								<p>
									Steven LOLLIVIER, <Age /> years young, born and grew up in Rennes, Britany. Highly
									motivated Software Engineer, that loves learning new things (this website, for example
									has been (re)made w/ SvelteKit !)
								</p>

								<span class="divider" />

								<p class="text-grey">
									I currently work at PocPharma, where I spend most of my time crafting and working
									on awesome projects (in C#, NestJs & React).
								</p>

								<!-- <p class="text-grey"></p> -->
							</div>
						</div>
					</div>
					<!-- //PROFILE TEXT END -->
					<!-- CONTACT DETAILS START -->
					<div class="contact-details padding-right-yes">
						<div class="row">
							<div class="col-sm-6 col-md-5">
								<h4>Contact Details</h4>

								<ul class="list-unstyled text-grey">
									<li>Steven LOLLIVIER</li>
									<li>
										<a href="mailto:steven.lollivier+pro@gmail.com">Click here to contact me</a>
									</li>
								</ul>
							</div>

							<div class="col-sm-6 col-md-7">
								<a
									href="/upload/cv.pdf"
									class="btn btn-lg btn-custom"
									download
									target="_blank"
									rel="external"
								>
									<i class="icon-File-Download" /> Download Resume
								</a>
							</div>
						</div>
					</div>
					<!-- //CONTACT DETAILS END -->
				</div>

				<!-- PROFILE PICTURE START -->
				<div class="col-md-5 hidden-xs hidden-sm match-height pp-wrapper">
					<div class="profile-picture style-one">
						<img src="images/profile-picture.jpeg" alt="profile" class="img-responsive" />
					</div>
				</div>
				<!-- //PROFILE PICTURE END -->
			</div>
		</div>
	</div>
</section>
