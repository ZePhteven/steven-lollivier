<script lang="ts">

    export let icon:string;
    export let url:string;
    
</script>

<div class="item">
  <a href="{url}" target="_blank"><i class="fa {icon}"></i></a>
</div>

<style>
    /* :host {
      display: inline-block;
    }

    :host([hidden]) {
      display: none;
    } */

    a {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 48px;
      height: 48px;
      line-height: 48px;
      font-size: 25px;
      color: rgba(255, 255, 255, 0.5);
    }
    
    a:hover {
      color: rgba(255, 255, 255, 0.7);
    }
  </style>
