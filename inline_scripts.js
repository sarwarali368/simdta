
    const correctKey = "786000"; // 🔑 Change apni key

    window.onload = function(){
      if(localStorage.getItem("SARWARFlexLogin") === "true"){
        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("homePage").classList.remove("hidden");
      }
    }

    function checkKey(){
      const key = document.getElementById("accessKey").value.trim();
      const errorMsg = document.getElementById("errorMsg");
      const loading = document.getElementById("loading");
      const loginBtn = document.getElementById("loginBtn");

      errorMsg.classList.add("hidden");

      if(key === correctKey){
        loginBtn.disabled = true;
        loading.classList.remove("hidden");
        setTimeout(() => {
          document.getElementById("loginScreen").style.display = "none";
          document.getElementById("homePage").classList.remove("hidden");
          localStorage.setItem("SARWARFlexLogin", "true");
        }, 2000);
      } else {
        errorMsg.classList.remove("hidden");
      }
    }

    function toggleMenu(){
      const sidebar = document.getElementById("sidebar");
      sidebar.classList.toggle("translate-x-full");
    }

    function logout(){
      localStorage.removeItem("SARWARFlexLogin");
      document.getElementById("homePage").classList.add("hidden");
      document.getElementById("loginScreen").style.display = "flex";
      document.getElementById("accessKey").value = "";
      document.getElementById("loginBtn").disabled = false;
      document.getElementById("loading").classList.add("hidden");
      toggleMenu();
    }

    document.getElementById("mainContent").addEventListener("click", () => {
      const sidebar = document.getElementById("sidebar");
      if (!sidebar.classList.contains("translate-x-full")) {
        sidebar.classList.add("translate-x-full");
      }
    });
  