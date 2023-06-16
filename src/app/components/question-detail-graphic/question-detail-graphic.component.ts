import { Component, Input, OnInit } from '@angular/core'

import {
  OptionWithSelected,
  QuestionWithAnswers,
} from 'src/app/models/Question.model'

import { EChartsOption } from 'echarts'

@Component({
  selector: 'app-question-detail-graphic',
  templateUrl: './question-detail-graphic.component.html',
})
export class QuestionDetailGraphicComponent implements OnInit {
  @Input() question!: QuestionWithAnswers
  graphicOptions!: EChartsOption

  ngOnInit(): void {
    const options = this.question.options as OptionWithSelected[]
    this.graphicOptions = {
      tooltip: {
        trigger: 'item',
      },
      title: {
        text: this.question.question,
        left: 'center',
      },
      series: [
        {
          name: '',
          type: 'pie',
          radius: '60%',
          data: options.map(option => ({
            value: option.selections,
            name: option.option,
          })),
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    }
  }
}
