<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
@font-face {
  font-family: InputMonoCondensedLight;
  src: url('../assets/Input_Fonts/InputMono/InputMonoCondensed/InputMonoCondensed-Light.ttf');
}
@font-face {
  font-family: InputMonoCondensed;
  src: url('../assets/Input_Fonts/InputMono/InputMonoCondensed/InputMonoCondensed-Regular.ttf');
}
@font-face {
  font-family: InputMonoCondensedItalic;
  src: url('../assets/Input_Fonts/InputMono/InputMonoCondensed/InputMonoCondensed-Italic.ttf');
}
@font-face {
  font-family: InputMonoCondensedLightItalic;
  src: url('../assets/Input_Fonts/InputMono/InputMonoCondensed/InputMonoCondensed-LightItalic.ttf');
}
html {
  font-family: 'InputMonoCondensed', monospace;
  font-size: 16px;
  background-color: rgb(247, 244, 209);
  color: black;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.el-select .el-input__inner,
textarea {
  border: 2px solid black !important;
  border-radius: 0px !important;

  font-family: 'InputMonoCondensed', monospace !important;
}

.el-table__body td {
  border-bottom: 2px solid black;
}
.el-table__body tr:last-child td {
  border-bottom: 0px !important;
  border: 0px;
}

.el-table__body tr:not(:nth-last-child(1)),
.el-table__body td,
.el-table__empty-block,
.el-table--border::after,
.el-table--group::after,
.el-table::before {
  background-color: rgb(247, 244, 204) !important;
  color: black !important;
  border-color: none;
  border: 0px;
  border-bottom: 2px solid black;
}

.el-table--striped .el-table__body tr.el-table__row--striped.current-row td,
.el-table__body tr.current-row > td,
.el-table__body tr.hover-row.current-row > td,
.el-table__body tr.hover-row.el-table__row--striped.current-row > td,
.el-table__body tr.hover-row.el-table__row--striped > td,
.el-table__body tr.hover-row > td,
.el-table--enable-row-hover .el-table__body tr:hover > td {
  color: white !important;
  background-color: black !important;
  border: 0px !important;
  border-spacing: 0px !important;
}

.el-table__header tr,
.el-table__header th,
el-table__header,
.el-table__header tr,
.el-table__header th,
.el-table__header {
  color: white !important;
  background-color: black !important;
  border: 0 px !important;
  border-color: none;
}
el-table__body {
  border: 0px;
}
.el-form-item__error {
  color: black !important;
  font-family: InputMonoCondensedLightItalic;
  margin: 5px 0px;
}
.el-table__empty-text {
  color: black !important;
  font-family: InputMonoCondensedLight;
}
table {
  border-color: black !important;
}
</style>
