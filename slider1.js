let sliderFactory = {
  getNewSlider: function() {
    let newSlider = {
      imgUrls: [],
      currentIndex: 0,
      prevButton: null,
      nextButton: null,
      imgSlider: null,
    
      start: function(elId) {
        let that = this;
    
        let el = document.querySelector('#' + elId)
    
        this.prevButton = el.querySelector('.prev-btn')
        this.nextButton = el.querySelector('.next-btn')
        this.imgSlider = el.querySelector('.img-slider')
    
        this.prevButton.addEventListener('click', function(e) {
          that.prevButtonClickListener()
        })
        this.nextButton.addEventListener('click', function(e) {
          that.nextButtonClickListener()
        })
    
        this.imgUrls.push('https://www.supercars.net/blog/wp-content/uploads/2019/05/Venturi-400-GT.png')
        this.imgUrls.push('https://i.imgur.com/sVVXZF4.jpg');
        this.imgUrls.push('https://blog.consumerguide.com/wp-content/uploads/sites/2/2016/02/Screen-Shot-2016-02-04-at-10.53.08-AM.png');
        this.imgUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS84Sr9XPtc4vmkG1CLmPuFIuR90d_kZUOLPQ&usqp=CAU');
        this.imgSlider.src = this.imgUrls[this.currentIndex]
        this.prevButton.disabled = true;
      },
    
      prevButtonClickListener: function(e) {
        this.currentIndex--;
        this.imgSlider.src = this.imgUrls[this.currentIndex]
        this.nextButton.disabled = false;
        // check
        if(this.currentIndex === 0) {
          this.prevButton.disabled = true;
        }
      },
    
      nextButtonClickListener: function(e) {
        this.currentIndex++;
        this.imgSlider.src = this.imgUrls[this.currentIndex]
        this.prevButton.disabled = false;
        // check
        if(this.currentIndex === this.imgUrls.length -1) {
          this.nextButton.disabled = true;
        }
      }
    }
    return newSlider;
  }
}