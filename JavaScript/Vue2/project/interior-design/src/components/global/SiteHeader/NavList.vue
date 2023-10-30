<template>
  <ul>
    <li><a href="#" class="li-element">Home</a></li>
    <li><a href="#" class="li-element">Project</a></li>
    <li><a href="#" class="li-element">Blog</a></li>
  </ul>
</template>
<script>
export default {
  name: "NavList",
};
</script>
<style>
ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 237px;
  height: 100%;
}
.li {
  display: block;
  height: 100%;
}
.li-element {
  color: #292f36;
  text-align: center;
  font-family: Jost;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  display: block;
}
</style>
