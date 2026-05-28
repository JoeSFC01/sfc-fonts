/* 
  Copyright Smartphone Free Childhood - www.smartphonefreechildhood.com - please take a look at an extremely worthwhile cause. 
  Code by jono@jlcworks.com - https://jlcworks.com
*/

(() => {
  const mobileTakeover = document.querySelector(".mobile-takeover");
  const mobileTakeoverToggles = document.querySelectorAll(
    ".mobile-takeover-toggle"
  );
  const navItemDropdownToggles = document.querySelectorAll(
    ".nav-item-dropdown-toggle"
  );

  const toggleMobileTakeover = () => {
    // Toggle the mobile takeover navigation menu
    mobileTakeoverToggles.forEach((el) => {
      el.addEventListener("click", () => {
        mobileTakeover.classList.toggle("mobile-takeover--active");
      });
    });
  };

  toggleMobileTakeover();

  const deactivateOtherMenus = (e) => {
    const togglesArray = [...navItemDropdownToggles];
    const thisTogglesIndex = togglesArray.indexOf(e.target);
    // Remove the clicked toggle from the array of all toggles
    if (thisTogglesIndex > -1) {
      togglesArray.splice(thisTogglesIndex, 1);
    }
    // Remove active classes from other toggles and dropdown menus
    togglesArray.forEach((toggleToDeactivate) => {
      const menuToDeactivate = toggleToDeactivate.nextElementSibling;
      toggleToDeactivate.classList.remove("nav-item-dropdown--active");
      menuToDeactivate.classList.remove("nav-item-dropdown--active");
    });
  };

  const toggleThisMenu = (e) => {
    // Activate this toggle and menu
    const thisToggle = e.target;
    const thisMenu = e.target.nextElementSibling;
    thisMenu.classList.toggle("nav-item-dropdown--active");
    thisToggle.classList.toggle("nav-item-dropdown--active");
  };

  const closeActiveMenuOnOutsideClick = (e) => {
    // Close menu on clicks outside of the active toggle or menu
    e.stopPropagation();
    const activeToggle = document.querySelector(
      ".nav-item-dropdown-toggle.nav-item-dropdown--active"
    );
    const activeMenu = document.querySelector(
      ".nav-item-dropdown.nav-item-dropdown--active"
    );
    if (
      activeToggle &&
      activeMenu &&
      e.target !== activeToggle &&
      e.target !== activeMenu &&
      [...activeMenu.children].indexOf(e.target) === -1 // Test to see if the click target was a child element of the active menu
    ) {
      activeToggle.classList.remove("nav-item-dropdown--active");
      activeMenu.classList.remove("nav-item-dropdown--active");
      window.removeEventListener("click", closeActiveMenuOnOutsideClick);
    }
  };

  // Toggle the navigation dropdown menus
  /* 
  navItemDropdownToggles.forEach((el) => {
    el.addEventListener("click", (e) => {
      deactivateOtherMenus(e);
      toggleThisMenu(e);
    });
  }); 
  */

  // Close active menus on clicks outside of an active menu
  // window.addEventListener("click", (e) => closeActiveMenuOnOutsideClick(e));
})();
