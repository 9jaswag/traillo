class ApplicationMailer < ActionMailer::Base
  default from: 'no-reply@traillo.herokuapp.com'
  layout 'mailer'
end
