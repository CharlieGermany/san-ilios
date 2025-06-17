      //LIST
      function toggleList() {
        const list = document.getElementById("list")
        const backdropFilter = document.getElementById("backdrop-filter")
        const listAnim01 = document.querySelector(".list-anim_01")
        const listAnim02 = document.querySelector(".list-anim_02")
        const listAnim03 = document.querySelector(".list-anim_03")
        const listHeader = document.querySelector(".list-header")
        const closeButton = document.querySelector(".list-close-button")
        list.classList.add(`active`);
        backdropFilter.classList.add(`active`);
        listAnim01.classList.add(`active`);
        listAnim02.classList.add(`active`);
        listAnim03.classList.add(`active`);
        listHeader.classList.add(`active`);
        closeButton.classList.add(`active`);
      }
      function closeList() {
        const list = document.getElementById("list")
        const backdropFilter = document.getElementById("backdrop-filter")
        const listAnim01 = document.querySelector(".list-anim_01")
        const listAnim02 = document.querySelector(".list-anim_02")
        const listAnim03 = document.querySelector(".list-anim_03")
        const listHeader = document.querySelector(".list-header")
        const closeButton = document.querySelector(".list-close-button")
        list.classList.remove(`active`);
        backdropFilter.classList.remove(`active`);
        listAnim01.classList.remove(`active`);
        listAnim02.classList.remove(`active`);
        listAnim03.classList.remove(`active`);
        listHeader.classList.remove(`active`);
        closeButton.classList.remove(`active`);
      }
      //PHOTO ALBUM
      function togglePA() {
        const pAItem = document.getElementsByClassName("pa-item");
        for(let i = 0; i < pAItem.length; i++) {
          pAItem[i].classList.add(`active`);
        }
      }
      function closePItem01() {
      console.log(`howdy`);
      const item01 = document.querySelector(".pa_01");
      item01.classList.remove(`active`);
      }
      function closePItem02() {
      console.log(`howdy`);
      const item02 = document.querySelector(".pa_02");
      item02.classList.remove(`active`);
      }
      function closePItem03() {
      console.log(`howdy`);
      const item03 = document.querySelector(".pa_03");
      item03.classList.remove(`active`);
      }
      function closePItem04() {
      console.log(`howdy`);
      const item04 = document.querySelector(".pa_04");
      item04.classList.remove(`active`);
      }
      function closePItem05() {
      console.log(`howdy`);
      const item05 = document.querySelector(".pa_05");
      item05.classList.remove(`active`);
      }
      function closePItem06() {
      console.log(`howdy`);
      const item06 = document.querySelector(".pa_06");
      item06.classList.remove(`active`);
      }
      function closePItem07() {
      console.log(`howdy`);
      const item07 = document.querySelector(".pa_07");
      item07.classList.remove(`active`);
      }
      function closePItem08() {
      console.log(`howdy`);
      const item08 = document.querySelector(".pa_08");
      item08.classList.remove(`active`);
      }
      function closePItem09() {
      console.log(`howdy`);
      const item09 = document.querySelector(".pa_09");
      item09.classList.remove(`active`);
      }
      function closePItem10() {
      console.log(`howdy`);
      const item10 = document.querySelector(".pa_10");
      item10.classList.remove(`active`);
      }
      function closePItem11() {
      console.log(`howdy`);
      const item11 = document.querySelector(".pa_11");
      item11.classList.remove(`active`);
      }
      function closePItem12() {
      console.log(`howdy`);
      const item12 = document.querySelector(".pa_12");
      item12.classList.remove(`active`);
      }

      //MESSAGE BOARD
      function toggleMB() {
        const mB = document.querySelector(".mb")
        const backdropFilter = document.getElementById("backdrop-filter")
        const mBody = document.querySelector(".m-body")
        const mTitle = document.querySelector(".m-title")
        const closeButton = document.querySelector(".mb-close-button")
        mB.classList.add(`active`);
        backdropFilter.classList.add(`active`);
        mBody.classList.add(`active`);
        mTitle.classList.add(`active`);
        closeButton.classList.add(`active`);
      }
      function closeMB() {
        const mB = document.querySelector(".mb")
        const backdropFilter = document.getElementById("backdrop-filter")
        const mBody = document.querySelector(".m-body")
        const mTitle = document.querySelector(".m-title")
        const closeButton = document.querySelector(".mb-close-button")
        mB.classList.remove(`active`);
        backdropFilter.classList.remove(`active`);
        mBody.classList.remove(`active`);
        mTitle.classList.remove(`active`);
        closeButton.classList.remove(`active`);
      }

      //POEMS
      function togglePoems() {
        const poemCol = document.querySelector(".poem-col")
        const backdropFilter = document.getElementById("backdrop-filter")
        const poemRow01 = document.querySelector(".poem-row_01");
        const poemRow02 = document.querySelector(".poem-row_02");
        const poemRow03 = document.querySelector(".poem-row_03");
        const poemRow04 = document.querySelector(".poem-row_04");
        poemCol.classList.add(`active`);
        backdropFilter.classList.add(`active`);
        poemRow01.classList.add(`active`);
        poemRow02.classList.add(`active`);
        poemRow03.classList.add(`active`);
        poemRow04.classList.add(`active`);
      }
      function closePoems() {
        const poemCol = document.querySelector(".poem-col")
        const backdropFilter = document.getElementById("backdrop-filter")
        const poemRow01 = document.querySelector(".poem-row_01");
        const poemRow02 = document.querySelector(".poem-row_02");
        const poemRow03 = document.querySelector(".poem-row_03");
        const poemRow04 = document.querySelector(".poem-row_04");
        poemCol.classList.remove(`active`);
        backdropFilter.classList.remove(`active`);
        poemRow01.classList.remove(`active`);
        poemRow02.classList.remove(`active`);
        poemRow03.classList.remove(`active`);
        poemRow04.classList.remove(`active`);
      }
      function toggleTalia() {
        const taliaImg = document.querySelector(".talia-img")
        taliaImg.classList.add(`active`);
      }
      function closeTalia() {
        const taliaImg = document.querySelector(".talia-img")
        taliaImg.classList.remove(`active`);
      }
      function toggleIHope() {
        const iHopeImg1 = document.querySelector(".i-hope-img_01")
        const iHopeImg2 = document.querySelector(".i-hope-img_02")
        iHopeImg1.classList.add(`active`);
        iHopeImg2.classList.add(`active`);
      }
      function closeIHope1() {
        const iHopeImg1 = document.querySelector(".i-hope-img_01")
        iHopeImg1.classList.remove(`active`);
      }
      function closeIHope2() {
        const iHopeImg2 = document.querySelector(".i-hope-img_02")
        iHopeImg2.classList.remove(`active`);
      }
      function toggleAcorn() {
        const acornImg = document.querySelector(".acorn-img")
        acornImg.classList.add(`active`);
      }
      function closeAcorn() {
        const acornImg = document.querySelector(".acorn-img")
        acornImg.classList.remove(`active`);
      }
      function toggleStarsOnly() {
        const starsOnlyImg = document.querySelector(".stars-only-img")
        starsOnlyImg.classList.add(`active`);
      }
      function closeStarsOnly() {
        const starsOnlyImg = document.querySelector(".stars-only-img")
        starsOnlyImg.classList.remove(`active`);
      }

      //MAIL
      function toggleMail() {
        const mail = document.querySelector(".mail")
        const mailIcon = document.querySelector(".mail-icon")
        const mailText = document.querySelector(".mail-text")
        const backdropFilter = document.getElementById("backdrop-filter")
        if (mail.classList == `active`) {
          mail.classList.remove(`active`);
          mailIcon.classList.remove(`active`);
          mailText.classList.remove(`active`);
          backdropFilter.classList.remove(`active`);
        } else
        mail.classList.add(`active`);
        mailIcon.classList.add(`active`);
        mailText.classList.add(`active`);
        backdropFilter.classList.add(`active`);
      }
      function closeMail() {
        const mail = document.querySelector(".mail")
        const mailIcon = document.querySelector(".mail-icon")
        const mailText = document.querySelector(".mail-text")
        const backdropFilter = document.getElementById("backdrop-filter")
        mail.classList.remove(`active`);
        mailIcon.classList.remove(`active`);
        mailText.classList.remove(`active`);
        backdropFilter.classList.remove(`active`);
      }
