// Section One 
document.getElementById('DonateNowBtnOneSection').addEventListener("click", function(){
  const NavbarBalance=getTextFieldValueById('navBalance')
  const BalanceOneSectionPart=getTextFieldValueById('BalanceOneSection')
  const TitleOneSection=getTextFieldValueById('titleOneSection')
  const InputMoneyOneSectionPart=getInputFieldValueById('InputMoneyOneSection')

  const MinusNavbarMoney = NavbarBalance - InputMoneyOneSectionPart;
  const AddedMoneyOneSection = BalanceOneSectionPart + InputMoneyOneSectionPart;

    if (InputMoneyOneSectionPart <= NavbarBalance && InputMoneyOneSectionPart > 0) {
      document.getElementById('navBalance').innerText =
      MinusNavbarMoney;
      document.getElementById('BalanceOneSection').innerText =  AddedMoneyOneSection;
    } 
    else {
      alert("Error ! You don't have this amount in your account");
    }

})

// Section Two 
document.getElementById('DonateNowBtnTwoSection').addEventListener("click", function(){
  const NavbarBalance=getTextFieldValueById('navBalance')
  const BalanceTwoSectionPart=getTextFieldValueById('BalanceTwoSection')
  const TitleTwoSection=getTextFieldValueById('titleTwoSection')
  const InputMoneyTwoSectionPart=getInputFieldValueById('InputMoneyTwoSection')

  const MinusNavbarMoney = NavbarBalance - InputMoneyTwoSectionPart;
  const AddedMoneyTwoSection = BalanceTwoSectionPart + InputMoneyTwoSectionPart;

    if (InputMoneyTwoSectionPart <= NavbarBalance && InputMoneyTwoSectionPart > 0) {
      document.getElementById('navBalance').innerText =
      MinusNavbarMoney;
      document.getElementById('BalanceTwoSection').innerText =  AddedMoneyTwoSection;
    } 
    else {
      alert("Error ! You don't have this amount in your account");
    }

})

// Section Three 
document.getElementById('DonateNowBtnThreeSection').addEventListener("click", function(){
  const NavbarBalance=getTextFieldValueById('navBalance')
  const BalanceThreeSectionPart=getTextFieldValueById('BalanceThreeSection')
  const TitleThreeSection=getTextFieldValueById('titleThreeSection')
  const InputMoneyThreeSectionPart=getInputFieldValueById('InputMoneyThreeSection')

  const MinusNavbarMoney = NavbarBalance - InputMoneyThreeSectionPart;
  const AddedMoneyThreeSection = BalanceThreeSectionPart + InputMoneyThreeSectionPart;

    if (InputMoneyThreeSectionPart <= NavbarBalance && InputMoneyThreeSectionPart > 0) {
      document.getElementById('navBalance').innerText =
      MinusNavbarMoney;
      document.getElementById('BalanceThreeSection').innerText =  AddedMoneyThreeSection;
    } 
    else {
      alert("Error ! You don't have this amount in your account");
    }

})

// Donate Button 
document.getElementById('donationBtn').addEventListener('click', function(){
  const OpenDonationPage=allUnhide('AllDonatePart')

  const donationBtnColor=document.getElementById('donationBtn').classList.add('bg-[#B4F461]')
  const historyBtnColor=document.getElementById('historyBtn').classList.remove('bg-[#B4F461]')
  
})

// History Button 
document.getElementById('historyBtn').addEventListener('click', function(){
  const OpenHistoryPage=allUnhide('HistoryInfo')

  const donationBtnColor=document.getElementById('donationBtn').classList.remove('bg-[#B4F461]')
  const historyBtnColor=document.getElementById('historyBtn').classList.add('bg-[#B4F461]')
})


// document.getElementById('DonateNowBtnOneSection').addEventListener("click", function(){
//   const NavbarBalance=getTextFieldValueById('navBalance')
//   const BalanceOneSectionPart=getTextFieldValueById('BalanceOneSection')
//   const TitleOneSection=getTextFieldValueById('titleOneSection')
//   const InputMoneyOneSectionPart=getTextFieldValueById('InputMoneyOneSection')

//   const MinusNavbarMoney = NavbarBalance - InputMoneyOneSectionPart;
//     const AddedMoneyOneSection = BalanceOneSectionPart + InputMoneyOneSectionPart;

//     if (InputMoneyOneSectionPart <= NavbarBalance && InputMoneyOneSectionPart > 0) {
//       document.getElementById('navBalance').innerText =
//       MinusNavbarMoney;
//       document.getElementById('BalanceOneSection').innerText =  AddedMoneyOneSection;
//     } 
//     else {
//       alert("Error ! You don't have this amount in your account");
//     }

// })