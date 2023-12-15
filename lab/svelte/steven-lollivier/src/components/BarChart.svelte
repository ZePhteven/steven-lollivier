<script lang="ts">
	export let title: string;
	export let percent: number;
</script>

<div class="item">
	<h4>{title}</h4>

	<div class="bar">
		<span class="percent">{percent}%</span>
		<span class="item-progress" data-percent={percent} />
	</div>
</div>

<style>
	/* :host {
      display: inline-block;
    }
    
    :host([hidden]) {
      display: none;
    } */

	h4 {
		margin-bottom: 18px;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	@media (min-width: 1280px) {
		h4 {
			margin-bottom: 12px;
		}
	}

	.bar {
		display: block;
		position: relative;
		width: 100%;
		height: 20px;
		margin-top: 15px;
		border-radius: 2px;
		background-color: #a1a1a1;
	}

	.bar > .item-progress {
		z-index: 5;
		position: absolute;
		top: 0;
		left: 0;
		width: 1%;
		height: 100%;
		border-radius: 2px;
		background-color: #3b3b3b;
	}

	.bar > .percent {
		z-index: 10;
		position: absolute;
		top: 50%;
		right: calc(100% - 40px);
		width: 40px;
		height: 40px;
		line-height: 40px;
		margin-top: -20px;
		background-color: #c80a48;
		font-size: 14px;
		font-weight: 700;
		text-align: center;
		border-radius: 4px;
		box-shadow: 3px 3px 10px #0d0c0d;
	}

	.bar > .percent {
		background-color: #00aeef;
	}
</style>
