/*
 * Stimulus-Autosize
 *
 * Copyright (C) 2019 Boris Raicheff
 * All rights reserved
 */


import autosize from "autosize";

import { Controller } from "stimulus";


// http://www.jacklmoore.com/autosize


export default class extends Controller {

  connect() {

    autosize(this.element);

  }

  disconnect() {

    autosize.destroy(this.element);

  }

  update() {

    autosize.update(this.element);

  }

}


/* EOF */
