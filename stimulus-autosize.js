/*
 * Stimulus-Autosize
 *
 * Copyright (C) 2019 Boris Raicheff
 * All rights reserved
 */


import autosize from "autosize";

import { Controller } from "stimulus";


export default class extends Controller {

  connect() {

    autosize(this.element);

  }

  disconnect() {

    autosize.destroy(this.element);

  }

}


/* EOF */
