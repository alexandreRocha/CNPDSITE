<template>
 
    <NavBar :logo="logo_src" :alt="app_name"/>
   
  <router-view/> 
  <!--<ServiceCnpd/> -->
  <FooterSite/>
  
</template>
<script>
import FooterSite from "@/components/FooterSite.vue" 
//import ServiceCnpd from "@/components/ServiceCnpd.vue" 
import NavBar from "@/components/NavBar.vue"   


 //import "../public/js/main.js" 
export default {
  components:{
    FooterSite,
    //ServiceCnpd,
    NavBar
},
data(){
  return {
     logo_src:'/img/logoicon.svg',
      app_name:'CNPD'
  }
  
  }
}
</script>

<style>
#autos{
  text-align: left;
  font-family: "Times New Roman", Times, serif;

} 
#autos:hover{ 
  border-width: 2px; /* Aumenta a largura da borda ao passar o mouse */
  box-shadow: 0px 0px 10px #2c3e50;
  border-radius: 10px;
}
#idsearch{
   width: 40%;
   height: 30px;
   text-align: center;
   box-shadow: 1px 1px  #061536;
   font-family: "Times New Roman", Times, serif;

 }


#links{
  color: #BD9A13; 
}
#biob{
  padding-top: 100px;
}
#removeItem {
  background-color: #bd9a13;
  outline: none !important;
  border-color: #061536;
  color: #061536;
  box-shadow: 0 0 10px #061536;
}
#addmore {
  background-color: #bd9a13;
  outline: none !important;
  border-color: #061536;
  color: #061536;
  box-shadow: 0 0 10px #061536;
}
#moradasimbotton {
  margin-left: 10px;
  color: #061536;
  border-color: #061536;
}
#moradasimbotton:hover {
  background-color: #061536;
  color: #fff;
  border: 2px solid #bd9a13;
}
 .downloadpdf{
  text-align: right;
 }
  *{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.errorMessage {
  color: red;
  font-family: "Times New Roman", Times, serif;
}
input.form-control:focus,
select.form-select:focus,
textarea.form-control:focus {
  outline: none !important;
  border-color: #061536;
  box-shadow: 0 0 10px #061536;
}
#alignCenter{
  text-align: center;
}
.section-bredcumbs { 
  text-align: left;
  padding-bottom: 20px;
}
 
.section-bredcumbs b {

  color: #BD9A13;
} 
.section-bredcumbs h5 {
  font-size: 12px;
  letter-spacing: 1px; 
  padding: 2px 12px;
  line-height: 1;  
  font-family: "Times New Roman", Times, serif;
  display: inline-block; 
  border-radius: 5px;
}
/**MULTISELECT STYLES */
 
/**MULTISELECT STYLES */


.multiselect {
  font-family: "Times New Roman", Times, serif;
}
.multiselect:focus,
.multiselect:hover {
  outline: none !important;
  border-color: #061536;
  box-shadow: 0 0 10px #061536;
  font-family: "Times New Roman", Times, serif;
}
.multiselect {
  font-family: "Times New Roman", Times, serif;
  align-items: center;
  background: var(--ms-bg, #fff);
  border: var(--ms-border-width, 1px) solid var(--ms-border-color, #061536);
  border-radius: var(--ms-radius, 4px);
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  font-size: var(--ms-font-size, 15px);
  justify-content: flex-end;
  margin: 0 auto;
  min-height: calc(
    var(--ms-border-width, 1px) * 2 + var(--ms-font-size, 1rem) *
      var(--ms-line-height, 1.375) + var(--ms-py, 0.5rem) * 2
  );
  outline: none;
  position: relative;
  width: 100%;
}
.multiselect.is-open {
  border-radius: var(--ms-radius, 4px) var(--ms-radius, 4px) 0 0;
}
.multiselect.is-open-top {
  border-radius: 0 0 var(--ms-radius, 4px) var(--ms-radius, 4px);
}
.multiselect.is-disabled {
  background: var(--ms-bg-disabled, #f3f4f6);
  cursor: default;
}
.multiselect.is-active {
  box-shadow: 0 0 0 var(--ms-ring-width, 1px) var(--ms-ring-color, #061536);
}
.multiselect-multiple-label,
.multiselect-placeholder,
.multiselect-single-label {
  align-items: center;
  background: transparent;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  left: 0;
  line-height: var(--ms-line-height, 1.375);
  max-width: 100%;
  padding-left: var(--ms-px, 0.875rem);
  padding-right: calc(1.25rem + var(--ms-px, 0.875rem) * 3);
  pointer-events: none;
  position: absolute;
  top: 0;
}
.multiselect-placeholder {
  color: var(--ms-placeholder-color, #9ca3af);
}
.multiselect-single-label-text {
  display: block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.multiselect-search {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: var(--ms-bg, #fff);
  border: 0;
  border-radius: var(--ms-radius, 4px);
  bottom: 0;
  box-sizing: border-box;
  font-family: "Times New Roman", Times, serif;
  font-size: "Times New Roman", Times, serif;
  height: 100%;
  left: 0;
  outline: none;
  padding-left: var(--ms-px, 0.875rem);
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}
.multiselect-search::-webkit-search-cancel-button,
.multiselect-search::-webkit-search-decoration,
.multiselect-search::-webkit-search-results-button,
.multiselect-search::-webkit-search-results-decoration {
  -webkit-appearance: none;
}
.multiselect-tags {
  align-items: center;
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-wrap: wrap;
  margin: var(--ms-tag-my, 0.25rem) 0 0;
  padding-left: var(--ms-py, 0.5rem);
}
.multiselect-tag {
  align-items: center;
  background: var(--ms-tag-bg, #061536);
  border-radius: var(--ms-tag-radius, 4px);
  color: var(--ms-tag-color, #fff);
  display: flex;
  font-size: var(--ms-tag-font-size, 0.875rem);
  font-weight: var(--ms-tag-font-weight, 600);
  line-height: var(--ms-tag-line-height, 1.25rem);
  margin-bottom: var(--ms-tag-my, 0.25rem);
  margin-right: var(--ms-tag-mx, 0.25rem);
  padding: var(--ms-tag-py, 0.125rem) 0 var(--ms-tag-py, 0.125rem)
    var(--ms-tag-px, 0.5rem);
  white-space: nowrap;
}
.multiselect-tag.is-disabled {
  background: var(--ms-tag-bg-disabled, #9ca3af);
  color: var(--ms-tag-color-disabled, #fff);
  padding-right: var(--ms-tag-px, 0.5rem);
}
.multiselect-tag-remove {
  align-items: center;
  border-radius: var(--ms-tag-remove-radius, 4px);
  display: flex;
  justify-content: center;
  margin: var(--ms-tag-remove-my, 0) var(--ms-tag-remove-mx, 0.125rem);
  padding: var(--ms-tag-remove-py, 0.25rem) var(--ms-tag-remove-px, 0.25rem);
}
.multiselect-tag-remove:hover {
  background: rgba(0, 0, 0, 0.063);
}
.multiselect-tag-remove-icon {
  background-color: currentColor;
  display: inline-block;
  height: 0.75rem;
  -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m207.6 256 107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m207.6 256 107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'/%3E%3C/svg%3E");
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  opacity: 0.8;
  width: 0.75rem;
}
.multiselect-tags-search-wrapper {
  display: inline-block;
  flex-grow: 1;
  flex-shrink: 1;
  height: 100%;
  margin: 0 var(--ms-tag-mx, 4px) var(--ms-tag-my, 4px);
  position: relative;
}
.multiselect-tags-search-copy {
  display: inline-block;
  height: 1px;
  visibility: hidden;
  white-space: pre-wrap;
  width: 100%;
}
.multiselect-tags-search {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 0;
  bottom: 0;
  box-sizing: border-box;
  font-family: "Times New Roman", Times, serif;
  font-size: "Times New Roman", Times, serif;
  left: 0;
  outline: none;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}
.multiselect-tags-search::-webkit-search-cancel-button,
.multiselect-tags-search::-webkit-search-decoration,
.multiselect-tags-search::-webkit-search-results-button,
.multiselect-tags-search::-webkit-search-results-decoration {
  -webkit-appearance: none;
}
.multiselect-inifite {
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: calc(
    var(--ms-border-width, 1px) * 2 + var(--ms-font-size, 1rem) *
      var(--ms-line-height, 1.375) + var(--ms-py, 0.5rem) * 2
  );
  width: 100%;
}
.multiselect-inifite-spinner,
.multiselect-spinner {
  -webkit-animation: multiselect-spin 1s linear infinite;
  animation: multiselect-spin 1s linear infinite;
  background-color: var(--ms-spinner-color, #061536);
  flex-grow: 0;
  flex-shrink: 0;
  height: 1rem;
  -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m456.433 371.72-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m456.433 371.72-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'/%3E%3C/svg%3E");
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  width: 1rem;
  z-index: 10;
}
.multiselect-spinner {
  margin: 0 var(--ms-px, 0.875rem) 0 0;
}
.multiselect-clear {
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  opacity: 1;
  padding: 0 var(--ms-px, 0.875rem) 0 0;
  position: relative;
  transition: 0.3s;
  z-index: 10;
}
.multiselect-clear:hover .multiselect-clear-icon {
  background-color: red, var(--ms-clear-color-hover, #000);
}
.multiselect-clear-icon {
  background-color: var(--ms-clear-color, #999);
  display: inline-block;
  -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m207.6 256 107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m207.6 256 107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'/%3E%3C/svg%3E");
  transition: 0.3s;
}
.multiselect-caret,
.multiselect-clear-icon {
  height: 1.125rem;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  width: 0.625rem;
}
.multiselect-caret {
  background-color: var(--ms-caret-color, #999);
  flex-grow: 0;
  flex-shrink: 0;
  margin: 0 var(--ms-px, 0.875rem) 0 0;
  -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E");
  pointer-events: none;
  position: relative;
  transform: rotate(0deg);
  transition: transform 0.3s;
  z-index: 10;
}
.multiselect-caret.is-open {
  pointer-events: auto;
  transform: rotate(180deg);
}
.multiselect-dropdown {
  -webkit-overflow-scrolling: touch;
  background: var(--ms-dropdown-bg, #fff);
  border: var(--ms-dropdown-border-width, 1px) solid
    var(--ms-dropdown-border-color, #061536);
  border-radius: 0 0 var(--ms-dropdown-radius, 4px)
    var(--ms-dropdown-radius, 4px);
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: calc(var(--ms-border-width, 1px) * -1);
  margin-top: calc(var(--ms-border-width, 1px) * -1);
  max-height: 15rem;
  max-height: var(--ms-max-height, 10rem);
  outline: none;
  overflow-y: scroll;
  position: absolute;
  right: calc(var(--ms-border-width, 1px) * -1);
  transform: translateY(100%);
  z-index: 100;
}
.multiselect-dropdown.is-top {
  border-radius: var(--ms-dropdown-radius, 4px) var(--ms-dropdown-radius, 4px) 0
    0;
  bottom: auto;
  top: var(--ms-border-width, 1px);
  transform: translateY(-100%);
}
.multiselect-dropdown.is-hidden {
  display: none;
}
.multiselect-options {
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
}
.multiselect-group {
  margin: 0;
  padding: 0;
}
.multiselect-group-label {
  align-items: center;
  background: var(--ms-group-label-bg, #e5e7eb);
  box-sizing: border-box;
  color: var(--ms-group-label-color, #374151);
  cursor: default;
  display: flex;
  font-size: 0.875rem;
  font-weight: 600;
  justify-content: flex-start;
  line-height: var(--ms-group-label-line-height, 1.375);
  padding: var(--ms-group-label-py, 0.3rem) var(--ms-group-label-px, 0.75rem);
  text-align: left;
  text-decoration: none;
}
.multiselect-group-label.is-pointable {
  cursor: pointer;
}
.multiselect-group-label.is-pointed {
  background: var(--ms-group-label-bg-pointed, #061536);
  color: var(--ms-group-label-color-pointed, #374151);
}
.multiselect-group-label.is-selected {
  background: var(--ms-group-label-bg-selected, #061536);
  color: var(--ms-group-label-color-selected, #fff);
}
.multiselect-group-label.is-disabled {
  background: var(--ms-group-label-bg-disabled, #f3f4f6);
  color: var(--ms-group-label-color-disabled, #061536);
  cursor: not-allowed;
}
.multiselect-group-label.is-selected.is-pointed {
  background: var(--ms-group-label-bg-selected-pointed, #061536);
  color: var(--ms-group-label-color-selected-pointed, #fff);
}
.multiselect-group-label.is-selected.is-disabled {
  background: var(--ms-group-label-bg-selected-disabled, #061536);
  color: var(--ms-group-label-color-selected-disabled, #061536);
}
.multiselect-group-options {
  margin: 0;
  padding: 0;
}
.multiselect-option {
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  font-size: var(--ms-option-font-size, 15px);
  justify-content: flex-start;
  line-height: var(--ms-option-line-height, 1.375);
  padding: var(--ms-option-py, 0.5rem) var(--ms-option-px, 0.75rem);
  text-align: left;
  text-decoration: none;
}
.multiselect-option.is-pointed {
  background: var(--ms-option-bg-pointed, #f3f4f6);
  color: var(--ms-option-color-pointed, #1f2937);
}
.multiselect-option.is-selected {
  background: var(--ms-option-bg-selected, #061536);
  color: var(--ms-option-color-selected, #fff);
}
.multiselect-option.is-disabled {
  background: var(--ms-option-bg-disabled, #fff);
  color: var(--ms-option-color-disabled, #061536);
  cursor: not-allowed;
}
.multiselect-option.is-selected.is-pointed {
  background: var(--ms-option-bg-selected-pointed, #061536);
  color: var(--ms-option-color-selected-pointed, #fff);
}
.multiselect-option.is-selected.is-disabled {
  background: var(--ms-option-bg-selected-disabled, #87dcc0);
  color: var(--ms-option-color-selected-disabled, #d1fae5);
}
.multiselect-no-options,
.multiselect-no-results {
  color: var(--ms-empty-color, #4b5563);
  padding: var(--ms-option-py, 0.5rem) var(--ms-option-px, 0.75rem);
}
.multiselect-fake-input {
  background: transparent;
  border: 0;
  bottom: -1px;
  font-size: 0;
  height: 1px;
  left: 0;
  outline: none;
  padding: 0;
  position: absolute;
  right: 0;
  width: 100%;
}
.multiselect-fake-input:active,
.multiselect-fake-input:focus {
  outline: none;
}
.multiselect-spacer {
  display: none;
}
[dir="rtl"] .multiselect-multiple-label,
[dir="rtl"] .multiselect-placeholder,
[dir="rtl"] .multiselect-single-label {
  left: auto;
  padding-left: calc(1.25rem + var(--ms-px, 0.875rem) * 3);
  padding-right: var(--ms-px, 0.875rem);
  right: 0;
}
[dir="rtl"] .multiselect-search {
  padding-left: 0;
  padding-right: var(--ms-px, 0.875rem);
}
[dir="rtl"] .multiselect-tags {
  padding-left: 0;
  padding-right: var(--ms-py, 0.5rem);
}
[dir="rtl"] .multiselect-tag {
  margin-left: var(--ms-tag-mx, 0.25rem);
  margin-right: 0;
  padding: var(--ms-tag-py, 0.125rem) var(--ms-tag-px, 0.5rem)
    var(--ms-tag-py, 0.125rem) 0;
}
[dir="rtl"] .multiselect-tag.is-disabled {
  padding-left: var(--ms-tag-px, 0.5rem);
}
[dir="rtl"] .multiselect-caret,
[dir="rtl"] .multiselect-spinner {
  margin: 0 0 0 var(--ms-px, 0.875rem);
}
[dir="rtl"] .multiselect-clear {
  padding: 0 0 0 var(--ms-px, 0.875rem);
}
@-webkit-keyframes multiselect-spin {
  0% {
    transform: rotate(0);
  }
  to {
    transform: rotate(1turn);
  }
}
@keyframes multiselect-spin {
  0% {
    transform: rotate(0);
  }
  to {
    transform: rotate(1turn);
  }
} 
/**TREE SELECT STYLES*/

.vue-treeselect-helper-hide {
  display: none;
}
.vue-treeselect-helper-zoom-effect-off {
  -webkit-transform: none !important;
  transform: none !important;
}
@-webkit-keyframes vue-treeselect-animation-fade-in {
  0% {
    opacity: 0;
  }
}
@keyframes vue-treeselect-animation-fade-in {
  0% {
    opacity: 0;
  }
}
@-webkit-keyframes vue-treeselect-animation-bounce {
  0%,
  to {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes vue-treeselect-animation-bounce {
  0%,
  to {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@-webkit-keyframes vue-treeselect-animation-rotate {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes vue-treeselect-animation-rotate {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
.vue-treeselect__multi-value-item--transition-enter-active,
.vue-treeselect__multi-value-item--transition-leave-active {
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
}
.vue-treeselect__multi-value-item--transition-enter-active {
  -webkit-transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}
.vue-treeselect__multi-value-item--transition-leave-active {
  -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  position: absolute;
}
.vue-treeselect__multi-value-item--transition-enter,
.vue-treeselect__multi-value-item--transition-leave-to {
  -webkit-transform: scale(0.7);
  transform: scale(0.7);
  opacity: 0;
}
.vue-treeselect__multi-value-item--transition-move {
  -webkit-transition: -webkit-transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: -webkit-transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1),
    -webkit-transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
}
/*
.vue-treeselect:focus,
.vue-treeselect:hover {
  outline: none !important;
  border-color: #061536;
  box-shadow: 0 0 10px #061536;
  font-family: "Times New Roman", Times, serif;;
}*/
.vue-treeselect {
  position: relative;
  text-align: left;
  font-family: "Times New Roman", Times, serif;
}
[dir="rtl"] .vue-treeselect {
  text-align: right;
}
.vue-treeselect div,
.vue-treeselect span {
  box-sizing: border-box;
}
.vue-treeselect svg {
  fill: currentColor;
}
.vue-treeselect__control {
  padding-left: 5px;
  padding-right: 5px;
  display: table;
  table-layout: fixed;
  width: 100%;
  height: 36px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #fff;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -webkit-transition-property: border-color, box-shadow, width, height,
    background-color, opacity;
  transition-property: border-color, box-shadow, width, height, background-color,
    opacity;
  -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
.vue-treeselect:not(.vue-treeselect--disabled):not(.vue-treeselect--focused)
  .vue-treeselect__control:hover {
  border-color: #cfcfcf;
}
.vue-treeselect--focused:not(.vue-treeselect--open) .vue-treeselect__control {
  border-color: #061536;
  box-shadow: 0 0 0 3px rgba(3, 155, 229, 0.1);
}
.vue-treeselect--disabled .vue-treeselect__control {
  background-color: #f9f9f9;
}
.vue-treeselect--open .vue-treeselect__control {
  border-color: #cfcfcf;
}
.vue-treeselect--open.vue-treeselect--open-below .vue-treeselect__control {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.vue-treeselect--open.vue-treeselect--open-above .vue-treeselect__control {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.vue-treeselect__multi-value,
.vue-treeselect__value-container {
  width: 100%;
  vertical-align: middle;
}
.vue-treeselect__value-container {
  display: table-cell;
  position: relative;
}
.vue-treeselect--searchable:not(.vue-treeselect--disabled)
  .vue-treeselect__value-container {
  cursor: text;
}
.vue-treeselect__multi-value {
  display: inline-block;
}
.vue-treeselect--has-value .vue-treeselect__multi-value {
  margin-bottom: 5px;
}
.vue-treeselect__placeholder,
.vue-treeselect__single-value {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 5px;
  padding-right: 5px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  line-height: 34px;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
}
.vue-treeselect__placeholder {
  color: #bdbdbd;
}
.vue-treeselect__single-value {
  color: #333;
}
.vue-treeselect--focused.vue-treeselect--searchable
  .vue-treeselect__single-value {
  color: #061536;
  /*aquiii */
}
.vue-treeselect--disabled .vue-treeselect__single-value {
  position: static;
}
.vue-treeselect__multi-value-item-container {
  display: inline-block;
  padding-top: 5px;
  padding-right: 5px;
  vertical-align: top;
}
[dir="rtl"] .vue-treeselect__multi-value-item-container {
  padding-right: 0;
  padding-left: 5px;
}
.vue-treeselect__multi-value-item {
  display: inline-table;
  padding: 2px 0;
  border: 1px solid transparent;
  border-radius: 2px;
  font-size: var(--ms-font-size, 15px);
  vertical-align: top;
}
.vue-treeselect:not(.vue-treeselect--disabled)
  .vue-treeselect__multi-value-item:not(.vue-treeselect__multi-value-item-disabled):hover
  .vue-treeselect__multi-value-item:not(.vue-treeselect__multi-value-item-new)
  .vue-treeselect__multi-value-item:not(.vue-treeselect__multi-value-item-new):hover,
.vue-treeselect__multi-value-item {
  cursor: pointer;
  background: #061536;
  color: #fff;
}
.vue-treeselect__multi-value-item.vue-treeselect__multi-value-item-disabled {
  cursor: default;
  background: #f5f5f5;
  color: #757575;
}
.vue-treeselect--disabled .vue-treeselect__multi-value-item {
  cursor: default;
  background: #fff;
  border-color: #e5e5e5;
  color: #555;
}
.vue-treeselect__multi-value-item.vue-treeselect__multi-value-item-new,
.vue-treeselect__multi-value-item.vue-treeselect__multi-value-item-new:hover {
  background: #e8f5e9;
}
.vue-treeselect__multi-value-label,
.vue-treeselect__value-remove {
  display: table-cell;
  padding: 0 5px;
  vertical-align: middle;
}
.vue-treeselect__value-remove {
  color: #061536;
  padding-left: 5px;
  border-left: 1px solid #fff;
  line-height: 0;
}
[dir="rtl"] .vue-treeselect__value-remove {
  border-left: 0 none;
  border-right: 1px solid #fff;
}
.vue-treeselect__multi-value-item:hover .vue-treeselect__value-remove {
  color: #e53935;
}
.vue-treeselect--disabled .vue-treeselect__value-remove,
.vue-treeselect__multi-value-item-disabled .vue-treeselect__value-remove {
  display: none;
}
.vue-treeselect__value-remove > svg {
  width: 6px;
  height: 6px;
}
.vue-treeselect__multi-value-label {
  padding-right: 5px;
  white-space: pre-line;
  -webkit-user-select: none;
  user-select: none;
}
.vue-treeselect__limit-tip {
  display: inline-block;
  padding-top: 5px;
  padding-right: 5px;
  vertical-align: top;
}
[dir="rtl"] .vue-treeselect__limit-tip {
  padding-right: 0;
  padding-left: 5px;
}
.vue-treeselect__limit-tip-text {
  cursor: default;
  display: block;
  margin: 2px 0;
  padding: 1px 0;
  color: #bdbdbd;
  font-size: var(--ms-font-size, 15px);
  font-weight: 600;
}
.vue-treeselect__input-container {
  display: block;
  max-width: 100%;
  outline: none;
}
.vue-treeselect--single .vue-treeselect__input-container {
  font-size: inherit;
  height: 100%;
}
.vue-treeselect--multi .vue-treeselect__input-container {
  display: inline-block;
  font-size: var(--ms-font-size, 15px);
  vertical-align: top;
}
.vue-treeselect--searchable .vue-treeselect__input-container {
  padding-left: 5px;
  padding-right: 5px;
}
.vue-treeselect--searchable.vue-treeselect--multi.vue-treeselect--has-value
  .vue-treeselect__input-container {
  padding-top: 5px;
  padding-left: 0;
}
[dir="rtl"]
  .vue-treeselect--searchable.vue-treeselect--multi.vue-treeselect--has-value
  .vue-treeselect__input-container {
  padding-left: 5px;
  padding-right: 0;
}
.vue-treeselect--disabled .vue-treeselect__input-container {
  display: none;
}
.vue-treeselect__input,
.vue-treeselect__sizer {
  margin: 0;
  line-height: inherit;
  font-family: "Times New Roman", Times, serif;
  font-size: inherit;
}
.vue-treeselect__input {
  max-width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  box-sizing: initial;
  box-shadow: none;
  background: none transparent;
  line-height: 1;
  vertical-align: middle;
}
.vue-treeselect__input::-ms-clear {
  display: none;
}
.vue-treeselect--single .vue-treeselect__input {
  width: 100%;
  height: 100%;
}
.vue-treeselect--multi .vue-treeselect__input {
  padding-top: 3px;
  padding-bottom: 3px;
}
.vue-treeselect--has-value .vue-treeselect__input {
  line-height: inherit;
  vertical-align: top;
}
.vue-treeselect__sizer {
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  height: 0;
  overflow: scroll;
  white-space: pre;
}
.vue-treeselect__x-container {
  display: table-cell;
  vertical-align: middle;
  width: 20px;
  text-align: center;
  line-height: 0;
  cursor: pointer;
  color: #ccc;
  -webkit-animation: vue-treeselect-animation-fade-in 0.2s
    cubic-bezier(0.075, 0.82, 0.165, 1);
  animation: vue-treeselect-animation-fade-in 0.2s
    cubic-bezier(0.075, 0.82, 0.165, 1);
}
.vue-treeselect__x-container:hover {
  color: #e53935;
}
.vue-treeselect__x {
  width: 8px;
  height: 8px;
}
.vue-treeselect__control-arrow-container {
  display: table-cell;
  vertical-align: middle;
  width: 20px;
  text-align: center;
  line-height: 0;
  cursor: pointer;
}
.vue-treeselect--disabled .vue-treeselect__control-arrow-container {
  cursor: default;
}
.vue-treeselect__control-arrow {
  width: 9px;
  height: 9px;
  color: #ccc;
}
.vue-treeselect:not(.vue-treeselect--disabled)
  .vue-treeselect__control-arrow-container:hover
  .vue-treeselect__control-arrow {
  color: #616161;
}
.vue-treeselect--disabled .vue-treeselect__control-arrow {
  opacity: 0.35;
}
.vue-treeselect__control-arrow--rotated {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
.vue-treeselect__menu-container {
  position: absolute;
  left: 0;
  width: 100%;
  overflow: visible;
  -webkit-transition: 0s;
  transition: 0s;
}
.vue-treeselect--open-below:not(.vue-treeselect--append-to-body)
  .vue-treeselect__menu-container {
  top: 100%;
}
.vue-treeselect--open-above:not(.vue-treeselect--append-to-body)
  .vue-treeselect__menu-container {
  bottom: 100%;
}
.vue-treeselect__menu {
  cursor: default;
  padding-top: 5px;
  padding-bottom: 5px;
  display: block;
  position: absolute;
  overflow-x: hidden;
  overflow-y: auto;
  width: auto;
  border: 1px solid #cfcfcf;
  background: #fff;
  line-height: 180%;
  -webkit-overflow-scrolling: touch;
}
.vue-treeselect--open-below .vue-treeselect__menu {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  top: 0;
  margin-top: -1px;
  border-top-color: #f2f2f2;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
}
.vue-treeselect--open-above .vue-treeselect__menu {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  bottom: 0;
  margin-bottom: -1px;
  border-bottom-color: #f2f2f2;
}
.vue-treeselect__indent-level-0 .vue-treeselect__option {
  padding-left: 5px;
}
[dir="rtl"] .vue-treeselect__indent-level-0 .vue-treeselect__option {
  padding-left: 5px;
  padding-right: 5px;
}
.vue-treeselect__indent-level-0 .vue-treeselect__tip {
  padding-left: 25px;
}
[dir="rtl"] .vue-treeselect__indent-level-0 .vue-treeselect__tip {
  padding-left: 5px;
  padding-right: 25px;
}
.vue-treeselect__indent-level-1 .vue-treeselect__option {
  padding-left: 25px;
}
[dir="rtl"] .vue-treeselect__indent-level-1 .vue-treeselect__option {
  padding-left: 5px;
  padding-right: 25px;
}
.vue-treeselect__indent-level-1 .vue-treeselect__tip {
  padding-left: 45px;
}
[dir="rtl"] .vue-treeselect__indent-level-1 .vue-treeselect__tip {
  padding-left: 5px;
  padding-right: 45px;
}
.vue-treeselect__indent-level-2 .vue-treeselect__option {
  padding-left: 45px;
}
[dir="rtl"] .vue-treeselect__indent-level-2 .vue-treeselect__option {
  padding-left: 5px;
  padding-right: 45px;
}
.vue-treeselect__indent-level-2 .vue-treeselect__tip {
  padding-left: 65px;
}
[dir="rtl"] .vue-treeselect__indent-level-2 .vue-treeselect__tip {
  padding-left: 5px;
  padding-right: 65px;
}
.vue-treeselect__indent-level-3 .vue-treeselect__option {
  padding-left: 65px;
}
[dir="rtl"] .vue-treeselect__indent-level-3 .vue-treeselect__option {
  padding-left: 5px;
  padding-right: 65px;
}
.vue-treeselect__indent-level-3 .vue-treeselect__tip {
  padding-left: 85px;
}
[dir="rtl"] .vue-treeselect__indent-level-3 .vue-treeselect__tip {
  padding-left: 5px;
  padding-right: 85px;
}
.vue-treeselect__indent-level-4 .vue-treeselect__option {
  padding-left: 85px;
}
[dir="rtl"] .vue-treeselect__indent-level-4 .vue-treeselect__option {
  padding-left: 5px;
  padding-right: 85px;
}
.vue-treeselect__indent-level-4 .vue-treeselect__tip {
  padding-left: 105px;
}
[dir="rtl"] .vue-treeselect__indent-level-4 .vue-treeselect__tip {
  padding-left: 5px;
  padding-right: 105px;
}
.vue-treeselect__indent-level-5 .vue-treeselect__option {
  padding-left: 105px;
}
[dir="rtl"] .vue-treeselect__indent-level-5 .vue-treeselect__option {
  padding-left: 5px;
  padding-right: 105px;
}
.vue-treeselect__indent-level-5 .vue-treeselect__tip {
  padding-left: 125px;
}
[dir="rtl"] .vue-treeselect__indent-level-5 .vue-treeselect__tip {
  padding-left: 5px;
  padding-right: 125px;
}
.vue-treeselect__indent-level-6 .vue-treeselect__option {
  padding-left: 125px;
}
[dir="rtl"] .vue-treeselect__indent-level-6 .vue-treeselect__option {
  padding-left: 5px;
  padding-right: 125px;
}
.vue-treeselect__indent-level-6 .vue-treeselect__tip {
  padding-left: 145px;
}
[dir="rtl"] .vue-treeselect__indent-level-6 .vue-treeselect__tip {
  padding-left: 5px;
  padding-right: 145px;
}
.vue-treeselect__indent-level-7 .vue-treeselect__option {
  padding-left: 145px;
}
[dir="rtl"] .vue-treeselect__indent-level-7 .vue-treeselect__option {
  padding-left: 5px;
  padding-right: 145px;
}
.vue-treeselect__indent-level-7 .vue-treeselect__tip {
  padding-left: 165px;
}
[dir="rtl"] .vue-treeselect__indent-level-7 .vue-treeselect__tip {
  padding-left: 5px;
  padding-right: 165px;
}
.vue-treeselect__indent-level-8 .vue-treeselect__option {
  padding-left: 165px;
}
[dir="rtl"] .vue-treeselect__indent-level-8 .vue-treeselect__option {
  padding-left: 5px;
  padding-right: 165px;
}
.vue-treeselect__indent-level-8 .vue-treeselect__tip {
  padding-left: 185px;
}
[dir="rtl"] .vue-treeselect__indent-level-8 .vue-treeselect__tip {
  padding-left: 5px;
  padding-right: 185px;
}
.vue-treeselect__option {
  padding-left: 5px;
  padding-right: 5px;
  display: table;
  table-layout: fixed;
  width: 100%;
}
.vue-treeselect__option--highlight {
  background: #f5f5f5;
}
.vue-treeselect--single .vue-treeselect__option--selected {
  background: #e3f2fd;
  font-weight: 600;
}
.vue-treeselect--single .vue-treeselect__option--selected:hover {
  background: #e3f2fd;
}
.vue-treeselect__option--hide {
  display: none;
}
.vue-treeselect__option-arrow-container,
.vue-treeselect__option-arrow-placeholder {
  display: table-cell;
  vertical-align: middle;
  width: 20px;
  text-align: center;
  line-height: 0;
}
.vue-treeselect__option-arrow-container {
  cursor: pointer;
}
.vue-treeselect__option-arrow {
  display: inline-block;
  width: 9px;
  height: 9px;
  color: #ccc;
  vertical-align: middle;
  -webkit-transition: -webkit-transform 0.2s cubic-bezier(0.19, 1, 0.22, 1);
  transition: -webkit-transform 0.2s cubic-bezier(0.19, 1, 0.22, 1);
  transition: transform 0.2s cubic-bezier(0.19, 1, 0.22, 1);
  transition: transform 0.2s cubic-bezier(0.19, 1, 0.22, 1),
    -webkit-transform 0.2s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}
[dir="rtl"] .vue-treeselect__option-arrow {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
.vue-treeselect--branch-nodes-disabled
  .vue-treeselect__option:hover
  .vue-treeselect__option-arrow,
.vue-treeselect__option-arrow-container:hover .vue-treeselect__option-arrow {
  color: #616161;
}
.vue-treeselect__option-arrow--rotated,
[dir="rtl"] .vue-treeselect__option-arrow--rotated {
  -webkit-transform: rotate(0);
  transform: rotate(0);
}
.vue-treeselect__option-arrow--rotated.vue-treeselect__option-arrow--prepare-enter {
  -webkit-transform: rotate(-90deg) !important;
  transform: rotate(-90deg) !important;
}
[dir="rtl"]
  .vue-treeselect__option-arrow--rotated.vue-treeselect__option-arrow--prepare-enter {
  -webkit-transform: rotate(90deg) !important;
  transform: rotate(90deg) !important;
}
.vue-treeselect__label-container {
  display: table-cell;
  vertical-align: middle;
  cursor: pointer;
  display: table;
  width: 100%;
  table-layout: fixed;
  color: inherit;
}
.vue-treeselect__option--disabled .vue-treeselect__label-container {
  cursor: not-allowed;
  color: rgba(0, 0, 0, 0.25);
}
.vue-treeselect__checkbox-container {
  display: table-cell;
  width: 20px;
  min-width: 20px;
  height: 100%;
  text-align: center;
  vertical-align: middle;
}
.vue-treeselect__checkbox {
  display: block;
  margin: auto;
  width: 12px;
  height: 12px;
  border-width: 1px;
  border-style: solid;
  border-radius: 2px;
  position: relative;
  -webkit-transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.vue-treeselect__check-mark,
.vue-treeselect__minus-mark {
  display: block;
  position: absolute;
  left: 1px;
  top: 1px;
  background-repeat: no-repeat;
  opacity: 0;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.vue-treeselect__minus-mark {
  width: 8px;
  height: 8px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAgMAAAC5YVYYAAAACVBMVEUAAAD///////9zeKVjAAAAAnRSTlMAuLMp9oYAAAAPSURBVAjXY4CDrJUgBAMAGaECJ9dz3BAAAAAASUVORK5CYII=);
  background-size: 8px 8px;
}
@media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx) {
  .vue-treeselect__minus-mark {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAAD///////////84wDuoAAAAA3RSTlMAyTzPIdReAAAAGUlEQVQI12PAD+b///+Nof7//79gAsLFCwAx/w4blADeeQAAAABJRU5ErkJggg==);
  }
}
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .vue-treeselect__minus-mark {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAAD///////////84wDuoAAAAA3RSTlMAyTzPIdReAAAAGUlEQVQI12PAD+b///+Nof7//79gAsLFCwAx/w4blADeeQAAAABJRU5ErkJggg==);
  }
}
@media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) {
  .vue-treeselect__minus-mark {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAD1BMVEUAAAD///////////////+PQt5oAAAABHRSTlMAy2EFIuWxUgAAACRJREFUGNNjGBBgJOICBY7KDCoucODEAJSAS6FwUJShGjAQAADBPRGrK2/FhgAAAABJRU5ErkJggg==);
  }
}
.vue-treeselect__checkbox--indeterminate > .vue-treeselect__minus-mark {
  opacity: 1;
}
.vue-treeselect__checkbox--disabled .vue-treeselect__minus-mark {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAgMAAAC5YVYYAAAACVBMVEUAAADi4uLh4eHOxeSRAAAAAnRSTlMAuLMp9oYAAAAPSURBVAjXY4CDrJUgBAMAGaECJ9dz3BAAAAAASUVORK5CYII=);
}
@media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx) {
  .vue-treeselect__checkbox--disabled .vue-treeselect__minus-mark {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAADi4uLi4uLh4eE5RQaIAAAAA3RSTlMAyTzPIdReAAAAGUlEQVQI12PAD+b///+Nof7//79gAsLFCwAx/w4blADeeQAAAABJRU5ErkJggg==);
  }
}
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .vue-treeselect__checkbox--disabled .vue-treeselect__minus-mark {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAADi4uLi4uLh4eE5RQaIAAAAA3RSTlMAyTzPIdReAAAAGUlEQVQI12PAD+b///+Nof7//79gAsLFCwAx/w4blADeeQAAAABJRU5ErkJggg==);
  }
}
@media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) {
  .vue-treeselect__checkbox--disabled .vue-treeselect__minus-mark {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAD1BMVEUAAADh4eHg4ODNzc3h4eEYfw2wAAAABHRSTlMAy2EFIuWxUgAAACRJREFUGNNjGBBgJOICBY7KDCoucODEAJSAS6FwUJShGjAQAADBPRGrK2/FhgAAAABJRU5ErkJggg==);
  }
}
.vue-treeselect__check-mark {
  width: 8px;
  height: 8px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////8IX9KGAAAAFXRSTlMA8u24NxILB+Tawb6jiH1zRz0xIQIIP3GUAAAAMklEQVQI1y3FtQEAMQDDQD+EGbz/qkEVOpyEOP6PudKjZNSXn4Jm2CKRdBKzSLsFWl8fMG0Bl6Jk1rMAAAAASUVORK5CYII=);
  background-size: 8px 8px;
  -webkit-transform: scaleY(0.125);
  transform: scaleY(0.125);
}
@media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx) {
  .vue-treeselect__check-mark {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAYFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////98JRy6AAAAH3RSTlMAzu4sDenl38fBvo1OMyIdEQrj1cSihX5hYFpHNycIcQOASAAAAF9JREFUGNN9zEcOgDAMRFHTS0LvNfe/JRmHKAIJ/mqeLJn+k9uDtaeUeFnFziGsBucUTirrprfe81RqZ3Bb6hPWeuZwDFOHyf+ig9CCzQ7INBn7bG5kF+QSt13BHNJnF7AaCT4Y+CW7AAAAAElFTkSuQmCC);
  }
}
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .vue-treeselect__check-mark {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAYFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////98JRy6AAAAH3RSTlMAzu4sDenl38fBvo1OMyIdEQrj1cSihX5hYFpHNycIcQOASAAAAF9JREFUGNN9zEcOgDAMRFHTS0LvNfe/JRmHKAIJ/mqeLJn+k9uDtaeUeFnFziGsBucUTirrprfe81RqZ3Bb6hPWeuZwDFOHyf+ig9CCzQ7INBn7bG5kF+QSt13BHNJnF7AaCT4Y+CW7AAAAAElFTkSuQmCC);
  }
}
@media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) {
  .vue-treeselect__check-mark {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAWlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////9ZMre9AAAAHXRSTlMA/PiJhGNI9XlEHJB/b2ldV08+Oibk49vPp6QhAYgGBuwAAACCSURBVCjPrdHdDoIwDAXgTWAqCigo/+f9X5OwnoUwtis4V92XNWladUl+rzQPeQJAN2EHxoOnsPn7/oYk8fxBv08Rr/deOH/aZ2Nm8ZJ+s573QGfWKnNuZGzWm3+lv2V3pcU1XQ385/yjmBoM3Z+dXvlbYLLD3ujhTaOM3KaIXvNkFkuSEvYy1LqOAAAAAElFTkSuQmCC);
  }
}
.vue-treeselect__checkbox--checked > .vue-treeselect__check-mark {
  opacity: 1;
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
}
.vue-treeselect__checkbox--disabled .vue-treeselect__check-mark {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEUAAADj4+Pf39/h4eHh4eHh4eHk5OTh4eHg4ODi4uLh4eHh4eHg4ODh4eHh4eHg4ODh4eHh4eHp6en////h4eFqcyvUAAAAFHRSTlMAOQfy7bgS5NrBvqOIfXNHMSELAgQ/iFsAAAA2SURBVAjXY4AANjYIzcjMAaVFuBkY+RkEWERYmRjYRXjANAOfiIgIFxNIAa8IpxBEi6AwiAQAK2MBd7xY8csAAAAASUVORK5CYII=);
}
@media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx) {
  .vue-treeselect__checkbox--disabled .vue-treeselect__check-mark {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAXVBMVEUAAADh4eHh4eHh4eHi4uLb29vh4eHh4eHh4eHh4eHh4eHh4eHh4eHi4uLi4uLj4+Pi4uLk5OTo6Ojh4eHh4eHi4uLg4ODg4ODh4eHg4ODh4eHf39/g4OD////h4eEzIk+wAAAAHnRSTlMAzu6/LA3p5eLZx8ONTjYiHRIKooV+YWBaRzEnCANnm5rnAAAAZElEQVQY033P2wqAIAyA4VWaaWrnc/n+j5mbhBjUf7WPoTD47TJb4i5zTr/sRDRHuyFaoWX7uK/RlbctlPEuyI1f4WY9yQINEkf6rzzo8YIzmUFoCs7J1EjeIaa9bXIEmzl8dgOZEAj/+2IvzAAAAABJRU5ErkJggg==);
  }
}
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .vue-treeselect__checkbox--disabled .vue-treeselect__check-mark {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAXVBMVEUAAADh4eHh4eHh4eHi4uLb29vh4eHh4eHh4eHh4eHh4eHh4eHh4eHi4uLi4uLj4+Pi4uLk5OTo6Ojh4eHh4eHi4uLg4ODg4ODh4eHg4ODh4eHf39/g4OD////h4eEzIk+wAAAAHnRSTlMAzu6/LA3p5eLZx8ONTjYiHRIKooV+YWBaRzEnCANnm5rnAAAAZElEQVQY033P2wqAIAyA4VWaaWrnc/n+j5mbhBjUf7WPoTD47TJb4i5zTr/sRDRHuyFaoWX7uK/RlbctlPEuyI1f4WY9yQINEkf6rzzo8YIzmUFoCs7J1EjeIaa9bXIEmzl8dgOZEAj/+2IvzAAAAABJRU5ErkJggg==);
  }
}
@media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) {
  .vue-treeselect__checkbox--disabled .vue-treeselect__check-mark {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAUVBMVEUAAADh4eHh4eHh4eHh4eHi4uLi4uLh4eHh4eHh4eHf39/j4+Ph4eHh4eHh4eHg4ODi4uLh4eHh4eHi4uLh4eHh4eHh4eHh4eHh4eH////h4eF3FMFTAAAAGnRSTlMA+/eJhGhfSHE9JBzz5KaQf3pXT0Xbz0I5AYDw8F0AAAB+SURBVCjPrdHbDoMgEEVRKAii1dZe9fz/hxplTiKIT7qfYCWTEEZdUvOwbckNAD2WHeh3brHW5f5EzGQ+iN+b1Gt6KPvtv16Dn6JX9M9ya3/A1yfu5dlyduL6Hec7mXY6ddXLPP2lpABGZ8PWXfYLTJxZekVhhl7eTX24zZPNKXoRC7zQLjUAAAAASUVORK5CYII=);
  }
}
.vue-treeselect__checkbox--unchecked {
  border-color: #e0e0e0;
  background: #fff;
}
.vue-treeselect__label-container:hover .vue-treeselect__checkbox--unchecked {
  border-color: #061536;
  background: #fff;
}
.vue-treeselect__checkbox--checked,
.vue-treeselect__checkbox--indeterminate,
.vue-treeselect__label-container:hover .vue-treeselect__checkbox--checked,
.vue-treeselect__label-container:hover
  .vue-treeselect__checkbox--indeterminate {
  border-color: #061536;
  background: #061536;
}
.vue-treeselect__checkbox--disabled,
.vue-treeselect__label-container:hover .vue-treeselect__checkbox--disabled {
  border-color: #e0e0e0;
  background-color: #f7f7f7;
}
.vue-treeselect__label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: table-cell;
  padding-left: 5px;
  max-width: 100%;
  vertical-align: middle;
  cursor: inherit;
}
[dir="rtl"] .vue-treeselect__label {
  padding-left: 0;
  padding-right: 5px;
}
.vue-treeselect__count {
  margin-left: 5px;
  font-weight: 400;
  opacity: 0.6;
}
[dir="rtl"] .vue-treeselect__count {
  margin-left: 0;
  margin-right: 5px;
}
.vue-treeselect__tip {
  padding-left: 5px;
  padding-right: 5px;
  display: table;
  table-layout: fixed;
  width: 100%;
  color: #757575;
}
.vue-treeselect__tip-text {
  display: table-cell;
  vertical-align: middle;
  padding-left: 5px;
  padding-right: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  font-size: var(--ms-font-size, 15px);
}
.vue-treeselect__error-tip .vue-treeselect__retry {
  cursor: pointer;
  margin-left: 5px;
  font-style: normal;
  font-weight: 600;
  text-decoration: none;
  color: #061536;
}
[dir="rtl"] .vue-treeselect__error-tip .vue-treeselect__retry {
  margin-left: 0;
  margin-right: 5px;
}
.vue-treeselect__icon-container {
  display: table-cell;
  vertical-align: middle;
  width: 20px;
  text-align: center;
  line-height: 0;
}
.vue-treeselect--single .vue-treeselect__icon-container {
  padding-left: 5px;
}
[dir="rtl"] .vue-treeselect--single .vue-treeselect__icon-container {
  padding-left: 0;
  padding-right: 5px;
}
.vue-treeselect__icon-warning {
  display: block;
  margin: auto;
  border-radius: 50%;
  position: relative;
  width: 12px;
  height: 12px;
  background: #061536;
}
.vue-treeselect__icon-warning:after {
  display: block;
  position: absolute;
  content: "";
  left: 5px;
  top: 2.5px;
  width: 2px;
  height: 1px;
  border: 0 solid #fff;
  border-top-width: 5px;
  border-bottom-width: 1px;
}
.vue-treeselect__icon-error {
  display: block;
  margin: auto;
  border-radius: 50%;
  position: relative;
  width: 12px;
  height: 12px;
  background: #e53935;
}
.vue-treeselect__icon-error:after,
.vue-treeselect__icon-error:before {
  display: block;
  position: absolute;
  content: "";
  background: #fff;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.vue-treeselect__icon-error:before {
  width: 6px;
  height: 2px;
  left: 3px;
  top: 5px;
}
.vue-treeselect__icon-error:after {
  width: 2px;
  height: 6px;
  left: 5px;
  top: 3px;
}
.vue-treeselect__icon-loader {
  display: block;
  margin: auto;
  position: relative;
  width: 12px;
  height: 12px;
  text-align: center;
  -webkit-animation: vue-treeselect-animation-rotate 1.6s linear infinite;
  animation: vue-treeselect-animation-rotate 1.6s linear infinite;
}
.vue-treeselect__icon-loader:after,
.vue-treeselect__icon-loader:before {
  border-radius: 50%;
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  -webkit-animation: vue-treeselect-animation-bounce 1.6s ease-in-out infinite;
  animation: vue-treeselect-animation-bounce 1.6s ease-in-out infinite;
}
.vue-treeselect__icon-loader:before {
  background: #061536;
}
.vue-treeselect__icon-loader:after {
  background: #061536;
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
.vue-treeselect__menu-placeholder {
  display: none;
}
.vue-treeselect__portal-target {
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  height: 0;
  width: 0;
  padding: 0;
  margin: 0;
  border: 0;
  overflow: visible;
  box-sizing: border-box;
}

#error1{
  color:black;
  font-weight: bold;
  font-size: 12px;
}

#error{
  color:red;
  font-weight: bold;
  font-size: 18px;
}
#success{
  color:green;
  font-weight: bold;
  font-size: 18px;
}
#headermodal{
  color:green;
  font-weight: bold;
  font-size: 18px;
}
 .modal-mask {
  font-family: "Times New Roman", Times, serif;
  font-size: 12px;
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  text-align: center;
  border-radius: 10px !important; 
  
}
#img{
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 50%;
  width: 50%;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modalFooter {
  display: center;
  font-weight: bold;
  color: #42b983;
}
 

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.modal-title{
   font-weight: bold;
}
</style>


