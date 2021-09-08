exports.components = [
    {
      name: 'guide',
      title: '开发指南',
      list: [
        { title: '安装', name: 'install', path: 'installation.md' },
        { title: '快速上手', name: 'quickstart', path: 'quickstart.md' },
        { title: '国际化', name: 'i18n', path: 'i18n.md' },
        { title: '自定义主题', name: 'custom-theme', path: 'custom-theme.md' },
        { title: '内置过渡动画', name: 'transition', path: 'transition.md' }
      ]
    },
    {
      name: 'components',
      title: '组件',
      list: [
        {
          name: 'basic',
          title: '基础',
          list: [
            { name: 'layout', path: '/layout.md', title: 'Layout 布局' },
            { name: 'container', path: '/container.md', title: 'Container 布局容器' },
            { name: 'color', path: '/color.md', title: 'Color 色彩' },
            { name: 'typography', path: '/typography.md', title: 'Typography 字体' },
            { name: 'border', path: '/border.md', title: 'Border 边框' },
            { name: 'icon', path: '/icon.md', title: 'Icon 图标' },
            { name: 'button', path: '/button.md', title: 'Button 按钮' },
            { name: 'link', path: '/link.md', title: 'Link 文字链接' }
          ]
        },
        {
          name: 'form',
          title: '表单',
          list: [
            { name: 'radio', path: '/radio.md', title: 'Radio 单选框' },
            { name: 'checkbox', path: '/checkbox.md', title: 'Checkbox 多选框' },
            { name: 'input', path: '/input.md', title: 'Input 输入框' },
            { name: 'input-business', path: '/input-business.md', title: 'InputBusiness 业务输入框' },
            { name: 'input-number', path: '/input-number.md', title: 'InputNumber 计数器' },
            { name: 'select', path: '/select.md', title: 'Select 选择器' },
            { name: 'select-drag', path: '/select-drag.md', title: 'SelectDrag 拖拽选择器' },
            { name: 'cascader', path: '/cascader.md', title: 'Cascader 级联选择器' },
            { name: 'switch', path: '/switch.md', title: 'Switch 开关' },
            { name: 'slider', path: '/slider.md', title: 'Slider 滑块' },
            { name: 'time-picker', path: '/time-picker.md', title: 'TimePicker 时间选择器' },
            { name: 'date-picker', path: '/date-picker.md', title: 'DatePicker 日期选择器' },
            { name: 'datetime-picker', path: '/datetime-picker.md', title: 'DateTimePicker 日期时间选择器' },
            { name: 'upload', path: '/upload.md', title: 'Upload 上传' },
            { name: 'rate', path: '/rate.md', title: 'Rate 评分' },
            { name: 'color-picker', path: '/color-picker.md', title: 'ColorPicker 颜色选择器' },
            { name: 'transfer', path: '/transfer.md', title: 'Transfer 穿梭框' },
            { name: 'form', path: '/form.md', title: 'Form 表单' }
          ]
        },
        {
          name: 'data',
          title: '数据',
          list: [
            { name: 'table', path: '/table.md', title: 'Table 表格' },
            { name: 'tag', path: '/tag.md', title: 'Tag 标签' },
            { name: 'progress', path: '/progress.md', title: 'Progress 进度条' },
            { name: 'tree', path: '/tree.md', title: 'Tree 树形控件' },
            { name: 'pagination', path: '/pagination.md', title: 'Pagination 分页' },
            { name: 'badge', path: '/badge.md', title: 'Badge 标记' },
            { name: 'avatar', path: '/avatar.md', title: 'Avatar 头像' }
          ]
        },
        {
          name: 'notice',
          title: '通知公告',
          list: [
            { name: 'alert', path: '/alert.md', title: 'Alert 警告' },
            { name: 'loading', path: '/loading.md', title: 'Loading 加载' },
            { name: 'message', path: '/message.md', title: 'Message 消息提示' },
            { name: 'message-box', path: '/message-box.md', title: 'MessageBox 弹框' },
            { name: 'notification', path: '/notification.md', title: 'Notification 通知' }
          ]
        },
        {
          name: 'navigation',
          title: '导航',
          list: [
            { name: 'menu', path: '/menu.md', title: 'NavMenu 导航菜单' },
            { name: 'tabs', path: '/tabs.md', title: 'Tabs 标签页' },
            { name: 'breadcrumb', path: '/breadcrumb.md', title: 'Breadcrumb 面包屑' },
            { name: 'page-header', path: '/page-header.md', title: 'PageHeader 页头' },
            { name: 'dropdown', path: '/dropdown.md', title: 'Dropdown 下拉菜单' },
            { name: 'steps', path: '/steps.md', title: 'Steps 步骤条' }
          ]
        },
        {
          name: 'others',
          title: '其他',
          list: [
            { name: 'dialog', path: '/dialog.md', title: 'Dialog 对话框' },
            { name: 'tooltip', path: '/tooltip.md', title: 'Tooltip 文字提示' },
            { name: 'popover', path: '/popover.md', title: 'Popover 弹出框' },
            { name: 'card', path: '/card.md', title: 'Card 卡片' },
            { name: 'carousel', path: '/carousel.md', title: 'Carousel 走马灯' },
            { name: 'collapse', path: '/collapse.md', title: 'Collapse 折叠面板' },
            { name: 'timeline', path: '/timeline.md', title: 'Timeline 时间线' },
            { name: 'divider', path: '/divider.md', title: 'Divider 分割线' },
            { name: 'calendar', path: '/calendar.md', title: 'Calendar 日历' },
            { name: 'image', path: '/image.md', title: 'Image 图片' },
            { name: 'backtop', path: '/backtop.md', title: 'Backtop 回到顶部' },
            { name: 'infiniteScroll', path: '/infiniteScroll.md', title: 'InfiniteScroll 无限滚动' },
            { name: 'drawer', path: '/drawer.md', title: 'Drawer 抽屉' },
            { name: 'count-down', path: '/count-down.md', title: 'Countdown 倒计时' },
            { name: 'sticky', path: '/sticky.md', title: 'Sticky 固定元素' }
          ]
        }
      ]
    }
  ];
  