export function gen_copy_div(pipe_name: string, path: string): string {
  var div_copy = `<div class="insertedContent bolt-portal-host absolute-fill no-events scroll-hidden">
  <div class="bolt-portal absolute-fill">
      <div class="flex-row flex-grow">
          <div class="bolt-dialog-callout bolt-callout absolute absolute-fill justify-center flex-center flex-column"
              id="__bolt-dialog-1">
              <div class="absolute-fill bolt-light-dismiss bolt-callout-modal"></div>
              <div aria-labelledby="__bolt-dialog-1-title" aria-modal="true"
                  class="ci-dialog bolt-dialog-callout-content relative scroll-auto bolt-callout-content bolt-callout-shadow flex-column bolt-callout-medium"
                  role="dialog">
                  <div class="bolt-dialog bolt-dialog-root flex-column flex-grow scroll-hidden">
                      <div class="bolt-dialog-focus-element no-outline" tabindex="-1"></div>
                      <div
                          class="bolt-panel-header bolt-header flex-row flex-noshrink flex-start bolt-default-horizontal-spacing bolt-header-default">
                          <div class="bolt-header-content-area flex-row flex-grow flex-self-stretch">
                              <div class="bolt-header-title-area flex-column flex-grow scroll-hidden">
                                  <div class="bolt-header-title-row flex-row flex-baseline">
                                      <div aria-level="1" class="bolt-header-title title-m l"
                                          id="__bolt-dialog-1-title" role="heading">Copy pipeline</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="bolt-dialog-content flex-column flex-grow bolt-default-horizontal-spacing">
                          <div class="flex-column"><label class="bolt-formitem-label body-m"
                                  id="__bolt-form-item-1-label">Name</label>
                              <div class="flex-column">
                                  <div class="bolt-textfield flex-row flex-center focus-treatment"><input
                                          autocomplete="off" aria-labelledby="__bolt-form-item-1-label"
                                          aria-required="true" data-focuszone="focuszone-80"
                                          class="bolt-textfield-input flex-grow" id="__bolt-textfield-input-1"
                                          required="" tabindex="0" value="${pipe_name}_clone"></div>
                              </div>
                          </div>
                          <div class="ci-folder-picker-container flex">
                              <div class="flex-grow flex-column"><label class="bolt-formitem-label body-m"
                                      id="__bolt-form-item-2-label">Select folder</label>
                                  <div class="flex-column">
                                      <div class="bolt-textfield flex-row flex-center focus-treatment"><input
                                              autocomplete="on" aria-labelledby="__bolt-form-item-2-label"
                                              aria-required="true" data-focuszone="focuszone-80"
                                              class="bolt-textfield-input flex-grow" id="__bolt-textfield-input-2"
                                              required="" tabindex="0" value="${path}"></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="bolt-panel-footer flex-center bolt-default-horizontal-spacing">
                          <div
                              class="bolt-panel-footer-buttons flex-grow bolt-button-group flex-row rhythm-horizontal-8">
                              <button class="bolt-button enabled bolt-focus-treatment" data-focuszone="focuszone-80"
                                  data-is-focusable="true" role="button" tabindex="0" type="button" id="cancel_btn"><span
                                      class="bolt-button-text body-m">Cancel</span></button><button
                                  class="bolt-button enabled primary bolt-focus-treatment"
                                  data-focuszone="focuszone-80" data-is-focusable="true" role="button" tabindex="0"
                                  type="button" id="copy-btn"><span class="bolt-button-text body-m">Copy</span></button></div>
                                  <div class="itemInfo" id="Status" style="display: inline-block;"></div
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>`;

  return div_copy;
}
