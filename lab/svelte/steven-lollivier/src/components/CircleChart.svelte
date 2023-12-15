<script lang="ts">
	export let title: string;
	export let percent: number;
</script>

<div class="item">
	<div class="circle">
		<span class="item-progress" data-percent={percent} />
	</div>

	<span class="percent">{percent}%</span>

	<h4 class="text-center">{title}</h4>
</div>

<style>
	/* :host {
      display: block;
    }
    
    :host([hidden]) {
      display: none;
    } */

	.circle {
		position: relative;
		margin: 0 auto;
		padding: 6px;
		width: 120px;
		height: 120px;
		background-color: #a1a1a1;
		border-radius: 50%;
		-ms-transform: rotate(180deg);
		-webkit-transform: rotate(180deg);
		-moz-transform: rotate(180deg);
		-o-transform: rotate(180deg);
		transform: rotate(180deg);
	}

	.circle > .item-progress {
		display: inline-block;
		position: relative;
		width: 108px;
		height: 20px;
		overflow: hidden;
	}

	.circle > .item-progress:before {
		display: block;
		content: '';
		width: 108px;
		height: 108px;
		background-color: #3b3b3b;
		border-radius: 106px;
	}

	.percent {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 40px;
		height: 40px;
		line-height: 40px;
		margin-top: -40px;
		margin-left: -20px;
		background-color: #c80a48;
		font-size: 14px;
		font-weight: 700;
		text-align: center;
		border-radius: 4px;
		box-shadow: 3px 3px 10px #0d0c0d;
	}

	h4 {
		margin-top: 20px;
		text-align: center;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.percent {
		background-color: #00aeef;
	}
</style>
