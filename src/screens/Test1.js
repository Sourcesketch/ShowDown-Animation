import React from 'react'
// assets for showdown
import { Application, Assets, Sprite } from 'pixi.js';
import header_bg from '../assets/images/showdown/header.png';
import base_img from '../assets/images/showdown/showdown-off.png';
import vegas_img from '../assets/images/showdown/vegas@2x.png';
import slots_img from '../assets/images/showdown/slots@2x.png';
import s_img from '../assets/images/showdown/s@2x.png';
import h_img from '../assets/images/showdown/h@2x.png';
import o1_img from '../assets/images/showdown/o-1@2x.png';
import w1_img from '../assets/images/showdown/w-1@2x.png';
import d_img from '../assets/images/showdown/d@2x.png';
import o2_img from '../assets/images/showdown/o-2@2x.png';
import w2_img from '../assets/images/showdown/w-2@2x.png';
import n_img from '../assets/images/showdown/n@2x.png';
import bolt from '../assets/images/showdown/bolt@2x.png';
import must_drop from '../assets/images/showdown/must_drop.png';
const Test1 = () => {
    // header showdown animation 
    (async () => {
        const app = new Application();
        await app.init({
          width: window.innerWidth,
          height: window.innerHeight,
          // resizeTo: window
        });
        document.body.appendChild(app.canvas);
        await Assets.load([header_bg, base_img, vegas_img, slots_img, s_img, h_img, o1_img, w1_img, d_img, o2_img, w2_img, n_img, bolt, must_drop]);
        app.stage.eventMode = 'static';
        const header = Sprite.from(header_bg);
        let scaleX = 1.5;
        let scaleY = 2;
        header.scale.set(scaleX, scaleY);
        header.alpha = 0.8;
        app.stage.addChild(header);
        const base = Sprite.from(base_img);
        base.anchor.set(0.5);
        base.x = app.screen.width / 2;
        base.y = app.screen.height / 3;
        app.stage.addChild(base);
        const vegas = Sprite.from(vegas_img);
        vegas.anchor.set(0.5);
        vegas.x = app.screen.width / 2.4;
        vegas.y = app.screen.height / 4.6;
        vegas.alpha = 0;
        app.stage.addChild(vegas);
        const slots = Sprite.from(slots_img);
        slots.anchor.set(0.5);
        slots.x = app.screen.width / 1.65;
        slots.y = app.screen.height / 4.6;
        slots.alpha = 0;
        app.stage.addChild(slots);
        const s_image = Sprite.from(s_img);
        s_image.anchor.set(0.5);
        s_image.x = app.screen.width / 3.1;
        s_image.y = app.screen.width / 5.3;
        s_image.alpha = 0;
        app.stage.addChild(s_image);
        const h_image = Sprite.from(h_img);
        h_image.anchor.set(0.5);
        h_image.x = app.screen.width / 2.65;
        h_image.y = app.screen.height / 2.7;
        h_image.alpha = 0;
        app.stage.addChild(h_image);
        const o1_image = Sprite.from(o1_img);
        o1_image.anchor.set(0.5);
        o1_image.x = app.screen.width / 2.4;
        o1_image.y = app.screen.height / 2.7;
        o1_image.alpha = 0;
        app.stage.addChild(o1_image);
        const w1_image = Sprite.from(w1_img);
        w1_image.anchor.set(0.5);
        w1_image.x = app.screen.width / 2.12;
        w1_image.y = app.screen.height / 2.78;
        w1_image.alpha = 0;
        app.stage.addChild(w1_image);
        const d_image = Sprite.from(d_img);
        d_image.anchor.set(0.5);
        d_image.x = app.screen.width / 1.88;
        d_image.y = app.screen.height / 2.85;
        d_image.alpha = 0;
        app.stage.addChild(d_image);
        const o2_image = Sprite.from(o2_img);
        o2_image.anchor.set(0.5);
        o2_image.x = app.screen.width / 1.74;
        o2_image.y = app.screen.height / 2.85;
        o2_image.alpha = 0;
        app.stage.addChild(o2_image);
        const w2_image = Sprite.from(w2_img);
        w2_image.anchor.set(0.5);
        w2_image.x = app.screen.width / 1.61;
        w2_image.y = app.screen.height / 2.73;
        w2_image.alpha = 0;
        app.stage.addChild(w2_image);
        const n_image = Sprite.from(n_img);
        n_image.anchor.set(0.5);
        n_image.x = app.screen.width / 1.48;
        n_image.y = app.screen.height / 2.66;
        n_image.alpha = 0;
        app.stage.addChild(n_image);
        const bolt_image = Sprite.from(bolt);
        bolt_image.anchor.set(0.5);
        bolt_image.x = app.screen.width / 1.97;
        bolt_image.y = app.screen.height / 4.82;
        bolt_image.alpha = 0;
        app.stage.addChild(bolt_image);
        const must_drop_image = Sprite.from(must_drop);
        must_drop_image.anchor.set(0.5);
        must_drop_image.x = app.screen.width / 2;
        must_drop_image.y = app.screen.height / 2;
        must_drop_image.scale.set(0.75);
        must_drop_image.alpha = 0;
        app.stage.addChild(must_drop_image);
        const initialDelay = 1;
        const delay = 1;
        setTimeout(() => {
          vegas.alpha = 1;
          slots.alpha = 1;
          setTimeout(() => {
            vegas.alpha = 0.6;
            slots.alpha = 0.6;
            s_image.alpha = 1;
            if (s_image) {
              setTimeout(() => {
                h_image.alpha = 1;
              }, delay * 200);
            }
            if (h_image) {
              setTimeout(() => {
                o1_image.alpha = 1;
              }, delay * 400);
            }
            if (o1_image) {
              setTimeout(() => {
                w1_image.alpha = 1;
              }, delay * 600);
            }
            setTimeout(() => {
              vegas.alpha = 1;
              slots.alpha = 1;
              if (o1_image) {
                bolt_image.alpha = 1;
                must_drop_image.alpha = 1;
                setInterval(() => {
                  bolt_image.alpha = 1;
                  setTimeout(() => {
                    bolt_image.alpha = 0;
                  }, delay * 1000);
                }, delay * 400);
                setTimeout(() => {
                  must_drop_image.alpha = 0;
                  setInterval(() => {
                    must_drop_image.alpha = 1;
                    setTimeout(() => {
                      must_drop_image.alpha = 0;
                      setInterval(() => {
                        must_drop_image.alpha = 1;
                      }, delay * 50);
                    }, delay * 200);
                  }, delay * 100);
                }, delay * 200);
              }
              if (o1_image) {
                setTimeout(() => {
                  d_image.alpha = 1;
                }, delay * 100);
              }
              if (d_image) {
                setTimeout(() => {
                  o2_image.alpha = 1;
                }, delay * 300);
              }
              if (o2_image) {
                setTimeout(() => {
                  w2_image.alpha = 1;
                }, delay * 500);
              }
              if (w2_image) {
                setTimeout(() => {
                  n_image.alpha = 1;
                }, delay * 700);
              }
            }, delay * 1000);
          }, delay * 1000);
        }, initialDelay * 500);
    
      })();
  return (
    <>

    </>
  )
}

export default Test1