<template>
  <main class="rating">
    <form class="rating__stars">
      <input
        id="rating-1"
        class="rating__input rating__input-1"
        type="radio"
        name="rating"
        value="1"
        @click="$emit('add', 1)"
      />
      <input
        id="rating-2"
        class="rating__input rating__input-2"
        type="radio"
        name="rating"
        value="2"
        @click="$emit('add', 2)"
      />
      <input
        id="rating-3"
        class="rating__input rating__input-3"
        type="radio"
        name="rating"
        value="3"
        @click="$emit('add', 3)"
      />
      <input
        id="rating-4"
        class="rating__input rating__input-4"
        type="radio"
        name="rating"
        value="4"
        @click="$emit('add', 4)"
      />
      <input
        id="rating-5"
        class="rating__input rating__input-5"
        type="radio"
        name="rating"
        value="5"
        @click="$emit('add', 5)"
      />
      <label class="rating__label" for="rating-1">
        <svg
          class="rating__star"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <g transform="translate(16,16)">
            <circle
              class="rating__star-ring"
              fill="none"
              stroke="#000"
              stroke-width="16"
              r="8"
              transform="scale(0)"
            />
          </g>
          <g
            stroke="#000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <g transform="translate(16,16) rotate(180)">
              <polygon
                class="rating__star-stroke"
                points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                fill="none"
              />
              <polygon
                class="rating__star-fill"
                points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                fill="#000"
              />
            </g>
            <g
              transform="translate(16,16)"
              stroke-dasharray="12 12"
              stroke-dashoffset="12"
            >
              <polyline
                class="rating__star-line"
                transform="rotate(0)"
                points="0 4,0 16"
              />
              <polyline
                class="rating__star-line"
                transform="rotate(72)"
                points="0 4,0 16"
              />
              <polyline
                class="rating__star-line"
                transform="rotate(144)"
                points="0 4,0 16"
              />
              <polyline
                class="rating__star-line"
                transform="rotate(216)"
                points="0 4,0 16"
              />
              <polyline
                class="rating__star-line"
                transform="rotate(288)"
                points="0 4,0 16"
              />
            </g>
          </g>
        </svg>
        <span class="rating__sr"></span>
      </label>
      <label class="rating__label" for="rating-2">
        <svg
          class="rating__star"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <g transform="translate(16,16)">
            <circle
              class="rating__star-ring"
              fill="none"
              stroke="#000"
              stroke-width="16"
              r="8"
              transform="scale(0)"
            />
          </g>
          <g
            stroke="#000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <g transform="translate(16,16) rotate(180)">
              <polygon
                class="rating__star-stroke"
                points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                fill="none"
              />
              <polygon
                class="rating__star-fill"
                points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                fill="#000"
              />
            </g>
            <g
              transform="translate(16,16)"
              stroke-dasharray="12 12"
              stroke-dashoffset="12"
            >
              <polyline
                class="rating__star-line"
                transform="rotate(0)"
                points="0 4,0 16"
              />
              <polyline
                class="rating__star-line"
                transform="rotate(72)"
                points="0 4,0 16"
              />
              <polyline
                class="rating__star-line"
                transform="rotate(144)"
                points="0 4,0 16"
              />
              <polyline
                class="rating__star-line"
                transform="rotate(216)"
                points="0 4,0 16"
              />
              <polyline
                class="rating__star-line"
                transform="rotate(288)"
                points="0 4,0 16"
              />
            </g>
          </g>
        </svg>
        <span class="rating__sr"></span>
      </label>
      <label class="rating__label" for="rating-3">
        <svg
          class="rating__star"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <g transform="translate(16,16)">
            <circle
              class="rating__star-ring"
              fill="none"
              stroke="#000"
              stroke-width="16"
              r="8"
              transform="scale(0)"
            />
          </g>
          <g
            stroke="#000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <g transform="translate(16,16) rotate(180)">
              <polygon
                class="rating__star-stroke"
                points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                fill="none"
              />
              <polygon
                class="rating__star-fill"
                points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                fill="#000"
              />
            </g>
            <g
              transform="translate(16,16)"
              stroke-dasharray="12 12"
              stroke-dashoffset="12"
            >
              <polyline
                class="rating__star-line"
                transform="rotate(0)"
                points="0 4,0 16"
              />
              <polyline
                class="rating__star-line"
                transform="rotate(72)"
                points="0 4,0 16"
              />
              <polyline
                class="rating__star-line"
                transform="rotate(144)"
                points="0 4,0 16"
              />
              <polyline
                class="rating__star-line"
                transform="rotate(216)"
                points="0 4,0 16"
              />
              <polyline
                class="rating__star-line"
                transform="rotate(288)"
                points="0 4,0 16"
              />
            </g>
          </g>
        </svg>
        <span class="rating__sr"></span>
      </label>
      <label class="rating__label" for="rating-4">
        <svg
          class="rating__star"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <g transform="translate(16,16)">
            <circle
              class="rating__star-ring"
              fill="none"
              stroke="#000"
              stroke-width="16"
              r="8"
              transform="scale(0)"
            />
          </g>
          <g
            stroke="#000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <g transform="translate(16,16) rotate(180)">
              <polygon
                class="rating__star-stroke"
                points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                fill="none"
              />
              <polygon
                class="rating__star-fill"
                points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                fill="#000"
              />
            </g>
            <g
              transform="translate(16,16)"
              stroke-dasharray="12 12"
              stroke-dashoffset="12"
            >
              <polyline
                class="rating__star-line"
                transform="rotate(0)"
                points="0 4,0 16"
              />
              <polyline
                class="rating__star-line"
                transform="rotate(72)"
                points="0 4,0 16"
              />
              <polyline
                class="rating__star-line"
                transform="rotate(144)"
                points="0 4,0 16"
              />
              <polyline
                class="rating__star-line"
                transform="rotate(216)"
                points="0 4,0 16"
              />
              <polyline
                class="rating__star-line"
                transform="rotate(288)"
                points="0 4,0 16"
              />
            </g>
          </g>
        </svg>
        <span class="rating__sr"></span>
      </label>
      <label class="rating__label" for="rating-5">
        <svg
          class="rating__star"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <g transform="translate(16,16)">
            <circle
              class="rating__star-ring"
              fill="none"
              stroke="#000"
              stroke-width="16"
              r="8"
              transform="scale(0)"
            />
          </g>
          <g
            stroke="#000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <g transform="translate(16,16) rotate(180)">
              <polygon
                class="rating__star-stroke"
                points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                fill="none"
              />
              <polygon
                class="rating__star-fill"
                points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
                fill="#000"
              />
            </g>
            <g
              transform="translate(16,16)"
              stroke-dasharray="12 12"
              stroke-dashoffset="12"
            >
              <polyline
                class="rating__star-line"
                transform="rotate(0)"
                points="0 4,0 16"
              />
              <polyline
                class="rating__star-line"
                transform="rotate(72)"
                points="0 4,0 16"
              />
              <polyline
                class="rating__star-line"
                transform="rotate(144)"
                points="0 4,0 16"
              />
              <polyline
                class="rating__star-line"
                transform="rotate(216)"
                points="0 4,0 16"
              />
              <polyline
                class="rating__star-line"
                transform="rotate(288)"
                points="0 4,0 16"
              />
            </g>
          </g>
        </svg>
        <span class="rating__sr"></span>
      </label>
    </form>
  </main>
</template>



<style scoped>
.rating__stars {
  display: flex;
  flex-flow: row;
  position: relative;
}
.rating__star {
  display: flex;
  flex-flow: row;
  pointer-events: none;
  width: 100%;
}
.rating__star-ring,
.rating__star-fill,
.rating__star-line,
.rating__star-stroke {
  stroke: #454954;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
.rating__star-ring,
.rating__star-fill,
.rating__star-line {
  stroke: var(--yellow);
}
.rating__star-fill {
  fill: var(--yellow);
  transform: scale(0);
  transition: fill var(--trans-dur) var(--bezier),
    transform var(--trans-dur) var(--bezier);
}
.rating__star-stroke {
  stroke: #c7cad1;
  transition: stroke var(--trans-dur);
}
.rating__label {
  cursor: pointer;
  padding: 0.125em;
}

.rating__input {
  -webkit-appearance: none;
  appearance: none;
}
.rating__input:hover ~ [data-rating]:not([hidden]) {
  display: none;
}
.rating__input-1:hover ~ [data-rating="1"][hidden],
.rating__input-2:hover ~ [data-rating="2"][hidden],
.rating__input-3:hover ~ [data-rating="3"][hidden],
.rating__input-4:hover ~ [data-rating="4"][hidden],
.rating__input-5:hover ~ [data-rating="5"][hidden],
.rating__input:checked:hover ~ [data-rating]:not([hidden]) {
  display: block;
}
.rating__input-1:hover ~ .rating__label:first-of-type .rating__star-stroke,
.rating__input-2:hover
  ~ .rating__label:nth-of-type(-n + 2)
  .rating__star-stroke,
.rating__input-3:hover
  ~ .rating__label:nth-of-type(-n + 3)
  .rating__star-stroke,
.rating__input-4:hover
  ~ .rating__label:nth-of-type(-n + 4)
  .rating__star-stroke,
.rating__input-5:hover
  ~ .rating__label:nth-of-type(-n + 5)
  .rating__star-stroke {
  stroke: var(--yellow);
  transform: scale(1);
}
.rating__input-1:checked ~ .rating__label:first-of-type .rating__star-ring,
.rating__input-2:checked
  ~ .rating__label:nth-of-type(-n + 2)
  .rating__star-ring,
.rating__input-3:checked
  ~ .rating__label:nth-of-type(-n + 3)
  .rating__star-ring,
.rating__input-4:checked
  ~ .rating__label:nth-of-type(-n + 4)
  .rating__star-ring,
.rating__input-5:checked
  ~ .rating__label:nth-of-type(-n + 5)
  .rating__star-ring {
  animation-name: starRing;
}
.rating__input-1:checked ~ .rating__label:first-of-type .rating__star-stroke,
.rating__input-2:checked
  ~ .rating__label:nth-of-type(-n + 2)
  .rating__star-stroke,
.rating__input-3:checked
  ~ .rating__label:nth-of-type(-n + 3)
  .rating__star-stroke,
.rating__input-4:checked
  ~ .rating__label:nth-of-type(-n + 4)
  .rating__star-stroke,
.rating__input-5:checked
  ~ .rating__label:nth-of-type(-n + 5)
  .rating__star-stroke {
  animation-name: starStroke;
}
.rating__input-1:checked ~ .rating__label:first-of-type .rating__star-line,
.rating__input-2:checked
  ~ .rating__label:nth-of-type(-n + 2)
  .rating__star-line,
.rating__input-3:checked
  ~ .rating__label:nth-of-type(-n + 3)
  .rating__star-line,
.rating__input-4:checked
  ~ .rating__label:nth-of-type(-n + 4)
  .rating__star-line,
.rating__input-5:checked
  ~ .rating__label:nth-of-type(-n + 5)
  .rating__star-line {
  animation-name: starLine;
}
.rating__input-1:checked ~ .rating__label:first-of-type .rating__star-fill,
.rating__input-2:checked
  ~ .rating__label:nth-of-type(-n + 2)
  .rating__star-fill,
.rating__input-3:checked
  ~ .rating__label:nth-of-type(-n + 3)
  .rating__star-fill,
.rating__input-4:checked
  ~ .rating__label:nth-of-type(-n + 4)
  .rating__star-fill,
.rating__input-5:checked
  ~ .rating__label:nth-of-type(-n + 5)
  .rating__star-fill {
  animation-name: starFill;
}
.rating__input-1:not(:checked):hover
  ~ .rating__label:first-of-type
  .rating__star-fill,
.rating__input-2:not(:checked):hover
  ~ .rating__label:nth-of-type(2)
  .rating__star-fill,
.rating__input-3:not(:checked):hover
  ~ .rating__label:nth-of-type(3)
  .rating__star-fill,
.rating__input-4:not(:checked):hover
  ~ .rating__label:nth-of-type(4)
  .rating__star-fill,
.rating__input-5:not(:checked):hover
  ~ .rating__label:nth-of-type(5)
  .rating__star-fill {
  fill: var(--yellow);
}
.rating__sr {
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
}

@keyframes starRing {
  from,
  20% {
    animation-timing-function: ease-in;
    opacity: 1;
    r: 8px;
    stroke-width: 16px;
    transform: scale(0);
  }
  35% {
    animation-timing-function: ease-out;
    opacity: 0.5;
    r: 8px;
    stroke-width: 16px;
    transform: scale(1);
  }
  50%,
  to {
    opacity: 0;
    r: 16px;
    stroke-width: 0;
    transform: scale(1);
  }
}
@keyframes starFill {
  from,
  40% {
    animation-timing-function: ease-out;
    transform: scale(0);
  }
  60% {
    animation-timing-function: ease-in-out;
    transform: scale(1.2);
  }
  80% {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
}
@keyframes starStroke {
  from {
    transform: scale(1);
  }
  20%,
  to {
    transform: scale(0);
  }
}
@keyframes starLine {
  from,
  40% {
    animation-timing-function: ease-out;
    stroke-dasharray: 1 23;
    stroke-dashoffset: 1;
  }
  60%,
  to {
    stroke-dasharray: 12 12;
    stroke-dashoffset: -12;
  }
}
</style>