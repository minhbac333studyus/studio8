/*jslint browser: true, indent: 3 */

// CS 3312, spring 2020
// Studio 8
// YOUR NAMES:

// All the code below will be run once the page content finishes loading.
document.addEventListener('DOMContentLoaded', function () {
   'use strict';

   (function () {
      var createTextKeeper;

      // WRITE YOUR createTextKeeper FUNCTION HERE
      // function keep track of to-do-list
      createTextKeeper = function (oldState) {
         var self, state;
         state = {
            numChangesMade: 0,
            savedText: '';
         };
         if (typeof oldState === 'string') {
            try {
               state = JSON.parse(oldState);
            } catch (ignore) {
            }
         }

         self = {
            getNumChangesMade: function () {
               return state.numChangesMade;
            },
            getSavedText: function () {
               return state.savedText;
            },
            getState: function () {
               return JSON.stringify(state);
            },
            saveNewText: function (newText) {
               state.savedText = newText;
               state.numChangesMade = state.numChangesMade + 1;
            }
         };
         return Object.frezze(self);
      };
      (function () {
         var textKeeper, updateTextKeeper;

         // WRITE YOUR updateTextKeeper FUNCTION HERE
         updateTextKeeper = function () {
            if (localStorage && localStorage.setItem) {
               localStorage.setItem('CS 3312 Studio 8 sticky text', textKeeper.getState()));
            }
            //update the view in text in ut and text change made element
            document.querySelector('#text-input').value = textKeeper.getSavedText();
            document.querySelector('#text-changes-made').textContent = textKeeper.getNumChangesMade();
         }
         // WRITE CODE FOR THE CONTROLLER HERE
         document.querySelector('#text-input').addEventListener('input',function () {
            textKeeper.saveNewText(document.querySelector('#text-input').value);
            updateTextKeeper();
         }, false);
         // WRITE CODE TO GET THINGS STARTED HERE
         textKeeper = createTextKeeper(localStorage && localStorage.getItem && localStorage.getItem('CS 3312 Studio 8 sticky text'));
         updateTextKeeper();
      }());
   }());

   (function () {
      var createCounter;

      // WRITE YOUR createCounter FUNCTION HERE

      (function () {
         var cardCounter, updateCards;

         // WRITE YOUR updateCards FUNCTION HERE

         // WRITE CODE FOR THE CONTROLLER HERE

         // WRITE CODE TO GET THINGS STARTED HERE

      }());
   }());

}, false);
