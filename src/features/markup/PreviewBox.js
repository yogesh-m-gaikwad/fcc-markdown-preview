import React from 'react';
import { useSelector } from 'react-redux';
import { selectMarkup } from './markupSlice';
import marked from 'marked';

export function PreviewBox() {
  const markup = useSelector(selectMarkup);
  const htmlText = marked(markup);

  return (
      <div id="preview" className="col-xs-12" dangerouslySetInnerHTML={{ __html: htmlText }}>
      </div>
  );
}
