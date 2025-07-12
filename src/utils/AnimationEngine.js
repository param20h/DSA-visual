export class AnimationEngine {
  constructor(speed = 500) {
    this.speed = speed;
    this.isRunning = false;
    this.queue = [];
    this.currentStep = 0;
  }

  setSpeed(speed) {
    this.speed = speed;
  }

  async delay(ms = this.speed) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async animate(callback, duration = this.speed) {
    if (this.isRunning) return;
    
    this.isRunning = true;
    await callback();
    await this.delay(duration);
    this.isRunning = false;
  }

  async sequence(animations) {
    for (const animation of animations) {
      await this.animate(animation.callback, animation.duration || this.speed);
    }
  }

  addToQueue(animation) {
    this.queue.push(animation);
  }

  async playQueue() {
    while (this.queue.length > 0) {
      const animation = this.queue.shift();
      await this.animate(animation.callback, animation.duration);
    }
  }

  stop() {
    this.isRunning = false;
    this.queue = [];
    this.currentStep = 0;
  }

  // Predefined animation types
  static fadeIn(element, duration = 300) {
    return {
      callback: () => {
        element.style.opacity = '0';
        element.style.transition = `opacity ${duration}ms`;
        setTimeout(() => element.style.opacity = '1', 10);
      },
      duration
    };
  }

  static slideIn(element, direction = 'left', duration = 300) {
    return {
      callback: () => {
        const transform = direction === 'left' ? 'translateX(-100%)' : 'translateY(-100%)';
        element.style.transform = transform;
        element.style.transition = `transform ${duration}ms ease-out`;
        setTimeout(() => element.style.transform = 'translate(0)', 10);
      },
      duration
    };
  }

  static highlight(element, color = '#ff6b35', duration = 500) {
    return {
      callback: () => {
        const originalBg = element.style.backgroundColor;
        element.style.backgroundColor = color;
        element.style.transition = 'background-color 200ms';
        setTimeout(() => {
          element.style.backgroundColor = originalBg;
        }, duration - 200);
      },
      duration
    };
  }

  static swap(element1, element2, duration = 600) {
    return {
      callback: () => {
        const rect1 = element1.getBoundingClientRect();
        const rect2 = element2.getBoundingClientRect();
        
        const deltaX1 = rect2.left - rect1.left;
        const deltaX2 = rect1.left - rect2.left;
        
        element1.style.transform = `translateX(${deltaX1}px)`;
        element2.style.transform = `translateX(${deltaX2}px)`;
        element1.style.transition = `transform ${duration}ms ease-in-out`;
        element2.style.transition = `transform ${duration}ms ease-in-out`;
        
        setTimeout(() => {
          element1.style.transform = '';
          element2.style.transform = '';
          element1.style.transition = '';
          element2.style.transition = '';
        }, duration);
      },
      duration
    };
  }
}