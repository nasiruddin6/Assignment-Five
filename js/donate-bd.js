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
