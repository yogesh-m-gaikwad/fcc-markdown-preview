import React from 'react';
import { useSelector } from 'react-redux';
import { selectMarkup } from './markupSlice';
import marked from 'marked';

/* 
  A functional React compoent to utilize userSelector hook from redux to get state data.
  This will render the processed html using marked library:
  Ref Link: https://marked.js.org/
*/
export function PreviewBox() {
  const markup = useSelector(selectMarkup);
  const htmlText = marked(markup);

  return (
      <div id="preview" className="col-xs-12" dangerouslySetInnerHTML={{ __html: htmlText }}>
      </div>
  );
}
