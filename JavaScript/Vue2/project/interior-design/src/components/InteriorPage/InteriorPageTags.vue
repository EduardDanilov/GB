<template>
  <div>
    <!-- <h3 class="tags-heading">Tags</h3> -->
    <div class="tag">{{ tag.name }}</div>
  </div>
</template>
<script>
export default {
  name: "InteriorPageTags",
  props: {
    tag: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
.tag {
  color: #292f36;
  text-align: center;
  font-family: Jost;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 22.5px */
  letter-spacing: 0.36px;
  border-radius: 10px;
  background: #f4f0ec;
  padding: 9px 30px;
}
.tag:hover {
  color: #fff;
  background: #292f36;
  cursor: pointer;
}
</style>
