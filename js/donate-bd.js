// Blog Button 
document.getElementById('BlogButton').addEventListener('click', function(){
  window.location.href="html/blog.html"
})


// Section One 
document.getElementById('DonateNowBtnOneSection').addEventListener("click", function(){
  const NavbarBalance=getTextFieldValueById('navBalance')
  const BalanceOneSectionPart=getTextFieldValueById('BalanceOneSection')
  const TitleOneSection=ContainerTittle('titleOneSection')
  const InputMoneyOneSectionPart=getInputFieldValueById('InputMoneyOneSection')

  const MinusNavbarMoney = NavbarBalance - InputMoneyOneSectionPart;
  const AddedMoneyOneSection = BalanceOneSectionPart + InputMoneyOneSectionPart;

    if (InputMoneyOneSectionPart <= NavbarBalance && InputMoneyOneSectionPart > 0) {
      document.getElementById('navBalance').innerText =
      MinusNavbarMoney;
      document.getElementById('BalanceOneSection').innerText =  AddedMoneyOneSection;


      
      const file=document.createElement('div')
      file.classList.add('border', 'w-full', 'p-2')

      const now=new Date()
      const fewTime=now.toString()


      file.innerHTML=`<h1 Class='font-bold'> ${InputMoneyOneSectionPart} Taka is  ${TitleOneSection}</h1>
      <p>${fewTime}</p>
      `
      document.getElementById('HistoryItems').appendChild(file)

    } 
    else {
      alert("Error ! You don't have enough money");
    }

})
function ModelOne() {
  const NavbarBalance = getTextFieldValueById('navBalance');
  const balanceOneSection = getTextFieldValueById('BalanceOneSection');
  const InputMoneyOneSectionPart = getInputFieldValueById('InputMoneyOneSection');
  const OutputAddNumber = balanceOneSection + InputMoneyOneSectionPart;

  if (OutputAddNumber > balanceOneSection && InputMoneyOneSectionPart <= NavbarBalance) {
    document.getElementById('my_modal_5').showModal();
  }
}

// Section Two 
document.getElementById('DonateNowBtnTwoSection').addEventListener("click", function(){
  const NavbarBalance=getTextFieldValueById('navBalance')
  const BalanceTwoSectionPart=getTextFieldValueById('BalanceTwoSection')
  const TitleTwoSection=ContainerTittle('titleTwoSection')
  const InputMoneyTwoSectionPart=getInputFieldValueById('InputMoneyTwoSection')

  const MinusNavbarMoney = NavbarBalance - InputMoneyTwoSectionPart;
  const AddedMoneyTwoSection = BalanceTwoSectionPart + InputMoneyTwoSectionPart;

    if (InputMoneyTwoSectionPart <= NavbarBalance && InputMoneyTwoSectionPart > 0) {
      document.getElementById('navBalance').innerText =
      MinusNavbarMoney;
      document.getElementById('BalanceTwoSection').innerText =  AddedMoneyTwoSection;

      
      const file=document.createElement('div')
      file.classList.add('border', 'w-full', 'p-2')

      const now=new Date()
      const fewTime=now.toString()


      file.innerHTML=`<h1 Class='font-bold'> ${InputMoneyTwoSectionPart} Taka is  ${TitleTwoSection}</h1>
      <p>${fewTime}</p>
      `
      document.getElementById('HistoryItems').appendChild(file)

    } 
    else {
      alert("Error !  You don't have enough money");
    }

})
function ModelTwo() {
  const NavbarBalance = getTextFieldValueById('navBalance');
  const balanceTwoSection = getTextFieldValueById('BalanceTwoSection');
  const InputMoneyTwoSectionPart = getInputFieldValueById('InputMoneyTwoSection');
  const OutputAddNumber = balanceTwoSection + InputMoneyTwoSectionPart;

  if (OutputAddNumber > balanceTwoSection && InputMoneyTwoSectionPart <= NavbarBalance) {
    document.getElementById('my_modal_5').showModal();
  }
}
// Section Three 
document.getElementById('DonateNowBtnThreeSection').addEventListener("click", function(){
  const NavbarBalance=getTextFieldValueById('navBalance')
  const BalanceThreeSectionPart=getTextFieldValueById('BalanceThreeSection')
  const TitleThreeSection=ContainerTittle('titleThreeSection')
  const InputMoneyThreeSectionPart=getInputFieldValueById('InputMoneyThreeSection')

  const MinusNavbarMoney = NavbarBalance - InputMoneyThreeSectionPart;
  const AddedMoneyThreeSection = BalanceThreeSectionPart + InputMoneyThreeSectionPart;

    if (InputMoneyThreeSectionPart <= NavbarBalance && InputMoneyThreeSectionPart > 0) {
      document.getElementById('navBalance').innerText =
      MinusNavbarMoney;
      document.getElementById('BalanceThreeSection').innerText =  AddedMoneyThreeSection;


      const file=document.createElement('div')
      file.classList.add('border', 'w-full', 'p-2')

      const now=new Date()
      const fewTime=now.toString()


      file.innerHTML=`<h1 Class='font-bold'> ${InputMoneyThreeSectionPart} Taka is  ${TitleThreeSection}</h1>
      <p>${fewTime}</p>
      `
      document.getElementById('HistoryItems').appendChild(file)

    } 
    else {
      alert("Error !  You don't have enough money");
    }

})
function ModelThree() {
  const NavbarBalance = getTextFieldValueById('navBalance');
  const balanceThreeSection = getTextFieldValueById('BalanceThreeSection');
  const InputMoneyThreeSectionPart = getInputFieldValueById('InputMoneyThreeSection');
  const OutputAddNumber = balanceThreeSection + InputMoneyThreeSectionPart;

  if (OutputAddNumber > balanceThreeSection && InputMoneyThreeSectionPart <= NavbarBalance) {
    document.getElementById('my_modal_5').showModal();
  }
}
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

