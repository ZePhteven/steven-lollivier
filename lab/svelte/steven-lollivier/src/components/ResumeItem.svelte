<script lang="ts">

    export let title: string;
    export let year: string;
    export let description: string = '';
    
    const id = (Math.random() + 1).toString(36).substring(7);
    
</script>

<div class="resume-item">
    <div class="resume-year">
      <span class="resume-year">{year}</span>
    </div>

    <div class="resume-btn">
      <a href="#education-{id}" class="collapsed" data-toggle="collapse" data-parent="#education" on:click={(e) => e.preventDefault()}>&nbsp;</a>
    </div>

    <div class="panel">
      <div class="panel-heading">
        <div class="panel-title">
          <h4 class="resume-title">{title}</h4>
        </div>
      </div>

      <div id="education-{id}" class="panel-collapse collapse">
        <div class="panel-body text-grey">
          {#if !!description}
          <p>{description}</p>
          {/if}
        </div>
      </div>
    </div>
  </div>

<style>
    /* :host {
      display: block;
    }

    :host([hidden]) {
      display: none;
    } */

    h4 {
      margin:0;
    }

    .resume-year {
      display: block;
      position: relative;
      width: 120px;
      height: 40px;
      margin-bottom: -20px;
      margin-right: auto;
      margin-left: auto;
      line-height: 40px;
      background-color: #c80a48;
      text-align: center;
      font-weight: 700;
      text-transform: uppercase;
      border-radius: 4px;
    }
  
    @media (min-width: 568px) {
      .resume-year {
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
      }
    }
  
    .resume-btn {
      position: absolute;
      z-index: 5;
      top: 0;
      left: 150px;
      width: 40px;
      height: 40px;
      background-color: #2e2e2e;
      border-radius: 4px;
    }
  
    @media (max-width: 767px) {
      .resume-btn {
        display: none;
      }
    }
  
    .resume-btn > a {
      display: block;
      position: absolute;
      z-index: 10;
      top: 0;
      left: 0;
      width: 40px;
      height: 40px;
    }
  
    .resume-btn > a:before {
      display: block;
      position: absolute;
      z-index: 15;
      content: '-';
      top: 0;
      left: 0;
      width: 40px;
      height: 40px;
      line-height: 38px;
      color: #ffffff;
      font-size: 30px;
      font-weight: 700;
      text-align: center;
    }

    .resume-btn > a.collapsed:before {
      content: '+';
    }
  
    .panel {
      padding: 10px;
      width: 100%;
      background: transparent;
      border: 1px solid #6e6e6e;
      border-radius: 0;
    }
  
    @media (min-width: 568px) {
      .panel {
        width: calc(100% - 140px);
        margin-left: 140px;
      }
    }
  
    @media (min-width: 768px) {
      .panel {
        width: calc(100% - 210px);
        margin-left: 210px;
      }
    }
  
    .panel .panel-heading {
      position: relative;
    }
  
    .panel .panel-heading .panel-title {
      text-transform: uppercase;
    }
  
    @media (max-width: 567px) {
      .panel .panel-heading .panel-title {
        padding-top: 20px;
      }
    }
  
    .panel .panel-collapse .panel-body {
      padding-top: 5px;
      border-top: none;
    }
  
    .panel .panel-collapse .panel-body p {
      margin-bottom: 0;
    }

    .resume-year {
      background-color: #00aeef;
    }
  </style>
